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
    await Drivers.insertMany(drivers);
    const driversFromDatabase = await Drivers.find({});
    const newLeague = await League.create({
      name,
      playerAdmin: idUser,
      players: idUser,
      drivers: driversFromDatabase
    });

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
  console.log('id=', id);
  // drivers.Drivers.find((drivers) => console.log(drivers.driverId == id));
  const league = await League.findOne({
    _id: mongoose.Types.ObjectId(id)
  }).populate('drivers');
  console.log('league=', league);
  if (!league) {
    return res.status(404).json({status: 'That league does not exists'});
  }
  return res.json(league.drivers);
});

module.exports = router;
