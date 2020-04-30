const express = require('express');
const router = express.Router();
const _ = require('lodash');

// GET home page
router.get('/', (req, res, next) => {
  res.json({status: 'Welcome'});
});

//User
const user = require('./auth');
router.use('/auth', user);

//Market
const market = require('./market');
router.use('/market', market);

//League
const league = require('./league');
router.use('/league', league);

//Bids
const bids = require('./bids');
router.use('/bids', bids);

//drivers
const drivers = require('./drivers');
router.use('/drivers', drivers);

module.exports = router;
