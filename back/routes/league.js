const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const axios = require('axios');
const passport = require('passport');
const League = require('../models/League');
const Drivers = require('../models/Drivers');
const User = require('../models/User');
const _ = require('lodash');
const drivers = require('../drivers.json');
const {isLoggedIn, isLoggedOut} = require('../lib/isLoggedMiddleware');
const http = require('follow-redirects').http;
const fs = require('fs');

// Create League
router.post('/create', passport.authenticate('jwt', {session: false}), async (req, res, next) => {
  const {name} = req.body;
  const idUser = req.user._id;
  try {
    const driversFromDatabase = await Drivers.find({});
    const newLeague = await League.create({
      name,
      playerAdmin: idUser,
      players: [idUser],
      drivers: driversFromDatabase
    });
    await User.findByIdAndUpdate(
      {_id: idUser},
      {
        league: newLeague
      }
    );

    return res.json({
      league: _.pick(newLeague, [
        '_id',
        'name',
        'players',
        'playerAdmin',
        'createdAt',
        'updatedAt'
      ]),
      status: 200,
      message: 'Liga creada!'
    });
  } catch (exception) {
    return res.json({status: 400, message: 'Fallo al recibir los datos'});
  }
});

//Get all leagues
router.post('/alls', async (req, res) => {
  try {
    const {_id} = req.body;
    if (_id) {
      const leagueList = await League.find({
        playerAdmin: {_id: _id}
      })
        .sort({createdAt: -1})
        .populate('players')
        .populate('drivers')
        .populate('playerAdmin');

      return res.json(leagueList);
    } else {
      const leagueList = await League.find().populate('playerAdmin');
      return res.json(leagueList);
    }
  } catch (err) {
    return res.json({status: 400, message: 'Fallo al recibir los datos'});
  }
});

//Delete leagues
router.post('/delete', isLoggedIn(), async (req, res) => {
  try {
    const {_id} = req.body;
    await League.findByIdAndRemove(_id);
    return res.json({
      status: 200,
      message: 'Liga eliminada'
    });
  } catch (err) {
    return res.json({status: 400, message: 'No encontrado'});
  }
});

router.get('/find', passport.authenticate('jwt', {session: false}), async (req, res, next) => {
  if (req.user) {
    const leagueList = await League.find({
      name: new RegExp(req.query.name, 'i')
    });
    return res.json(leagueList);
  } else {
    return res.status(401).json({status: 'No user session present'});
  }
});

router.post('/join', passport.authenticate('jwt', {session: false}), async (req, res, next) => {
  if (req.user) {
    const league = await League.findOne({
      _id: mongoose.Types.ObjectId(req.body.id)
    });
    if (!league) {
      return res.status(404).json({status: 'That league does not exists'});
    }
    league.players = [...league.players, req.user._id];
    league.save();
    return res.json(league);
  } else {
    return res.status(401).json({status: 'No user session present'});
  }
});

router.get('/:id/drivers', async (req, res) => {
  const id = req.params.id;
  // drivers.Drivers.find((drivers) => console.log(drivers.driverId == id));
  const league = await League.findOne({
    _id: mongoose.Types.ObjectId(id)
  }).populate('drivers');
  if (!league) {
    return res.status(404).json({status: 'That league does not exists'});
  }
  return res.json(league.drivers);
});

router.get(
  '/:id/sign-up/:driverId',
  // passport.authenticate('jwt', {session: false}),
  async (req, res) => {
    const leagueId = req.params.id;
    const driverId = req.params.driverId;

    console.log('liga', leagueId);
    console.log('driver', driverId);

    // check that the league exists
    const league = await League.findOne({
      _id: mongoose.Types.ObjectId(leagueId)
    }).populate('unavailableDrivers');
    if (!league) {
      return res.status(404).json({message: 'That league does not exists'});
    }
    console.log('Esto es liga', league);

    // check that the driver exists
    const driver = await Drivers.findOne({
      _id: mongoose.Types.ObjectId(driverId)
    });
    if (!driver) {
      return res.status(404).json({message: 'That driver does not exists'});
    }
    console.log('Esto es drivers', drivers);
    // check if the driver is available
    if (
      league.unavailableDrivers.filter(
        (unavailableDriver) => unavailableDriver._id.toString() === driverId
      ).length > 0
    ) {
      console.log('entro!');
      return res.status(400).json({message: 'That driver is not available'});
    }
    console.log('dinero', req.user);
    const user = req.user;
    // check money is enough
    if (driver.initialValue >= user.money) {
      return res.status(400).json({message: 'That money is not enough'});
    }

    league.unavailableDrivers = [...league.unavailableDrivers, driverId];
    league.save();

    const userFromMongo = await User.findById({_id: user._id});
    userFromMongo.drivers = [...user.drivers, driverId];
    userFromMongo.money -= driver.initialValue;
    userFromMongo.save();

    return res.json(userFromMongo.toObject());
  }
);

module.exports = router;
