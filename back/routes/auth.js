const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const League = require('../models/League');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const _ = require('lodash');
const {isLoggedIn} = require('../lib/isLoggedMiddleware');
//const uploader = require("../cloudinary/cloudinary.config");

//Singup
router.get('/signup', (req, res) => {
  res.json({status: 'Signup'});
});

router.post('/signup', async (req, res, next) => {
  const {username, password, name, lastname, email} = req.body;
  console.log(username, password, name, lastname, email);
  try {
    if (!username || !password || !name || !lastname || !email) {
      res.json('Please, complete Username, Password or Email');
      return;
    }
    const existingUser = await User.findOne({username});

    if (!existingUser) {
      const newUser = await User.create({
        username,
        password,
        name,
        lastname,
        email
      });
      req.login(newUser, (err) => {
        res.json(newUser);
      });
    } else {
      res.status(400);
      res.json({message: 'User Exists'});
    }
  } catch (err) {
    next(err);
  }
});

//Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (error, user, info) => {
    if (error) {
      return res.status(500).json({message: 'Internal server error'});
    }
    if (!user) {
      return res.status(400).json(info);
    }
    req.login(user, async (err) => {
      if (err) {
        return res.status(500).json({status: 500, message: 'authentication error'});
      }
      const {
        user: {username, lastname, name, email, id}
      } = req;
      const returnUser = {username, lastname, name, email, id};
      const leagueList = await League.find({
        players: mongoose.Types.ObjectId(returnUser.id)
      });
      const token = jwt.sign(returnUser, 'formula1');
      return res.json({
        token,
        ...returnUser,
        leagueList
      });
    });
  })(req, res, next);
});

//Logout
router.get('/logout', isLoggedIn(), (req, res, next) => {
  if (req.user) {
    req.logout();
    return res.json({status: 'Log out'});
  } else {
    return res.status(401).json({status: 'You have to be logged in to logout'});
  }
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session: false}), async (req, res, next) => {
  if (req.user) {
    const leagueList = await League.find({
      players: mongoose.Types.ObjectId(req.user.id)
    });
    return res.json({
      ...req.user,
      leagueList
    });
  } else {
    return res.status(401).json({status: 'No user session present'});
  }
});

//Edit
router.post('/edit', isLoggedIn(), async (req, res, next) => {
  try {
    const id = req.user._id;
    const {username, name, lastname, email} = req.body;
    await User.findByIdAndUpdate(id, {
      username,
      name,
      lastname,
      email
    });
    return res.json({
      status: 200,
      message: 'User edit!'
    });
  } catch (error) {
    return res.json({status: 401, message: 'Fallo al editar Usuario'});
  }
});

//Image upload
// router.post("/upload", uploader.single("imageUrl"), async (req, res, next) => {
//   const imageUpload = req.file.secure_url;

//   if (!req.file) {
//     next(new Error("No existe ningún archivo para subir"));
//     return;
//   }
//   if (req.user) {
//     await Users.findByIdAndUpdate(
//       req.user._id,
//       {
//         image: imageUpload,
//       },
//       { new: true }
//     );
//   }
//   res.json({
//     secure_url: imageUpload,
//     status: 200,
//     message: "Image upload!",
//   });
// });

module.exports = router;
