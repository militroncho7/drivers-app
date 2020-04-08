const express = require("express");
const User = require("../models/User");
const passport = require("passport");
const router = express.Router();
const _ = require("lodash");
const { isLoggedIn } = require("../lib/isLoggedMiddleware");

//Singup
router.get("/signup", (req, res) => {
  res.json({ status: "Signup" });
});

router.post("/signup", async (req, res, next) => {
  const { username, password, name, lastname, email} = req.body;
  //console.log(sername, password, name, lastname, email);
  try {
    if (!username || !password || !name || !lastname ||!email) {
      res.json("Please, complete Username, Password or Email");
      return;
    }
    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      const newUser = await User.create({ username, password, name, lastname, email });
      req.login(newUser, (err) => {
        res.json(newUser);
      });
    } else {
      res.json({ status: "User Exists" });
    }
  } catch (err) {
    next(err);
  }
});

//Login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({ message: "Server error" });
      }

      if (!user) {
        return res.json({ status: 401, message: "No User register" });
      }

      if (err) {
        console.log(err);
        return res.json({ status: 500, message: "authentication error" });
      }
      return res.json(_.pick(req.user, ["username", "password", "name", "lastname", "email"]));
    });
  })(req, res, next);
});

//Logout
router.get("/logout", isLoggedIn(), (req, res, next) => {
  if (req.user) {
    req.logout();
    return res.json({ status: "Log out" });
  } else {
    return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });
  }
});

//Profile
router.get("/profile", isLoggedIn(), (req, res, next) => {
  if (req.user) return res.json(req.user);
  else return res.status(401).json({ status: "No user session present" });
});

module.exports = router;
