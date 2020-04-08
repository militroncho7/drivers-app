const express = require("express");
const router = express.Router();

// routes middlewares
const auth = require('./auth');
router.use('/auth', auth);

//market
const market = require('./market');
router.use('/market', market);

/* GET home page */
router.get("/", (req, res, next) => {
  res.json({ status: "Welcome" });
});

module.exports = router;
