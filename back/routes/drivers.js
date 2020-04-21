const express = require('express');
const router = express.Router();
const axios = require('axios');
const League = require('../models/League');
const Drivers = require('../models/Drivers');
const User = require('../models/User');
const _ = require('lodash');
const {isLoggedIn, isLoggedOut} = require('../lib/isLoggedMiddleware');
const http = require('follow-redirects').http;
const fs = require('fs');
const drivers = require('../drivers.json');

// Create Driver List
router.post('/create', isLoggedIn(), async (req, res, next) => {
  const {
    driverId,
    permanentNumber,
    code,
    url,
    givenName,
    familyName,
    dateOfBirth,
    nationality,
    initialValue,
    market
  } = req.body;

  const idUser = req.user;

  const driversList = await Drivers.create({
    driverId,
    permanentNumber,
    code,
    url,
    givenName,
    familyName,
    dateOfBirth,
    nationality,
    initialValue,
    market,
    playerAdmin: idUser,
    players: idUser
  });

  return res.json({
    drivers: _.pick(driversList, [
      'driverId',
      'permanentNumber',
      'givenName',
      'familyName',
      'createdAt',
      'updatedAt'
    ]),
    status: 200,
    message: 'Lista de pilotos creada!'
  });
});

//Get all drivers
router.post('/alls', async (req, res) => {
  try {
    const {_id} = req.body;
    if (_id) {
      const driversList = await Drivers.find({
        playerAdmin: {_id: _id}
      })
        .sort({createdAt: -1})
        .populate('driverId')
        .populate('permanentNumber')
        .populate('code')
        .populate('givenName')
        .populate('familyName')
        .populate('dateOfBirth')
        .populate('nationality')
        .populate('initialValue')
        .populate('market');

      return res.json(leagueList);
    } else {
      const driversList = await Drivers.find().populate('playerAdmin');
      return res.json(driversList);
    }
  } catch (err) {
    return res.json({status: 400, message: 'Fallo al recibir los datos'});
  }
});

// //Delete drivers
// router.post("/delete", isLoggedIn(), async (req, res) => {
//   try {
//     const { _id } = req.body;
//     await Drivers.findByIdAndRemove(_id);
//     return res.json({
//       status: 200,
//       message: "Piloto eliminado",
//     });
//   } catch (err) {
//     return res.json({ status: 400, message: "No encontrado" });
//   }
// });

router.get('/list', async (req, res) => {
  res.json(drivers);
});

router.post('/fichar/:id', async (req, res) => {
  const id = req.params.id;
  // drivers.Drivers.find((drivers) => console.log(drivers.driverId == id));
  const findDriver = drivers.Drivers.filter((driver) => driver.driverId == id);
  findDriver.market = false;
  return res.json({status: 200, message: 'Piloto fichado'});
});

module.exports = router;
