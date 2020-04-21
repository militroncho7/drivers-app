const express = require('express');
const router = express.Router();
const axios = require('axios');
const passport = require('passport');
const League = require('../models/League');
const Drivers = require('../models/Drivers');
const User = require('../models/User');
const _ = require('lodash');
const {isLoggedIn, isLoggedOut} = require('../lib/isLoggedMiddleware');
const http = require('follow-redirects').http;
const fs = require('fs');

// Create League
router.post('/create', passport.authenticate('jwt', {session: false}), async (req, res, next) => {
  const {name} = req.body;
  const idUser = req.user.id;

  const newLeague = await League.create({
    name,
    playerAdmin: idUser,
    players: idUser
  });

  return res.json({
    league: _.pick(newLeague, ['_id', 'name', 'players', 'playerAdmin', 'createdAt', 'updatedAt']),
    status: 200,
    message: 'Liga creada!'
  });
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

module.exports = router;
