const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.json({status: 'Welcome to market'});
});

module.exports = router;
