const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { crudGenerator } = require("./crudModels");
const _ = require("lodash");

// GET home page
router.get("/", (req, res, next) => {
  res.json({ status: "Welcome" });
});

router.use("/auth", require("./auth"));

//Market
const market = require('./market');
router.use('/market', market);

module.exports = router;
