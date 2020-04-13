const express = require("express");
const router = express.Router();
const axios = require("axios");
const Bids = require("../models/Bids");
const Drivers = require("../models/Drivers");
const League = require("../models/League");
const User = require("../models/User");
const _ = require("lodash");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");
const http = require('follow-redirects').http;
const fs = require('fs');

//Create Bid
router.post("/create", isLoggedIn(), async (req, res, next) => {
    const { driver, userOffer, userReceives, bid, status } = req.body;
    const idUser = req.user;
  
    const newBid = await Bid.create({
      driver,
      userOffer: idUser,
      userReceives: idUser,
      bid,
      status
    });
  
    return res.json({
      Bids: _.pick(newBid, [
        "driver",
        "userOffer",
        "userReceives",
        "bid",
        "status"
      ]),
      status: 200,
      message: "Puja creada!",
    });
  });  
  
//   //Get all bids
//   router.post("/alls", async (req, res) => {
//     try {
//       const { _id } = req.body;
//       if (_id) {
//         const bidList = await Bids.find({
//           playerAdmin: { _id: _id },
//         })
//           .sort({ createdAt: -1 })
//           .populate("players").populate("drivers").populate("playerAdmin");
  
//         return res.json(bidList);
//       } else {
//         const bidList = await Bids.find().populate("playerAdmin");
//         return res.json(bidList);
//       }
//     } catch (err) {
//       return res.json({ status: 400, message: "Fallo al recibir los datos" });
//     }
//   });
  
  //Delete bids
  router.post("/delete", isLoggedIn(), async (req, res) => {
    try {
      const { _id } = req.body;
      await Bids.findByIdAndRemove(_id);
      return res.json({
        status: 200,
        message: "Puja eliminada",
      });
    } catch (err) {
      return res.json({ status: 400, message: "No encontrado" });
    }
  });
  
  module.exports = router;
  