const express = require("express");
const router = express.Router();
const User = require("../models/User");
const _ = require("lodash");
const passport = require("passport");
const { hashPassword, checkHashed } = require("../lib/hashing");
const { isLoggedIn, isLoggedOut } = require("../lib/isLoggedMiddleware");
const uploader = require("../cloudinary/cloudinary.config");

// SIGNUP
router.post("/signup", async (req, res, next) => {
  const {
    username,
    password,
    name,
    lastname,
    email,
    rol
  } = req.body;

  //console.log(username, password, name, lastname, email, rol);

  // Create the user
  const existingUser = await User.findOne({ username });
  if (!existingUser) {
    const newUser = await User.create({
      username,
      password: hashPassword(password),
      name,
      lastname,
      email,
      rol
    });
    // Directly login user
    req.logIn(newUser, err => {
      res.json(
        _.pick(req.user, [
          "username",
          "_id",
          "name",
          "lastname",
          "email",
          "rol",
          "createdAt",
          "updatedAt"
        ])
      );
    });
    console.log(username, "resgitrado");
  } else {
    res.json({ status: "User Exist" });
  }
});

// LOGIN
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, failureDetails) => {
    if (err) {
      console.log(err);
      return res.json({ status: 500, message: "Error de autentificación" });
    }

    if (!user) {
      return res.json({ status: 401, message: failureDetails.message });
    }

    req.login(user, err => {
      if (err) {
        return res.status(500).json({ message: "Sesion mal guardada" });
      }

      return res.json(
        _.pick(req.user, [
          "username",
          "_id",
          "name",
          "lastname",
          "email",
          "rol",
          "createdAt",
          "updatedAt"
        ])
      );
    });
  })(req, res, next);
});

// LOGOUT
router.post("/logout", isLoggedIn(), async (req, res, next) => {
  if (req.user) {
    req.logout();
    return res.json({ status: "Log out" });
  } else {
    return res
      .status(401)
      .json({ status: "You have to be logged in to logout" });
  }
});

/* EDIT */
router.post("/edit", isLoggedIn(), async (req, res, next) => {
  try {
    const id = req.user._id;
    const { username, name, lastname, email, rol } = req.body;
    await User.findByIdAndUpdate(id, {
      username,
      name,
      lastname,
      email,
      rol
    });
    return res.json({ status: "Edit Profile" });
  } catch (error) {
    return res.status(401).json({ status: "Not Found" });
  }
});

// WHOAMI
router.post("/whoami", (req, res, next) => {
  if (req.user)
    return res.json(
      _.pick(req.user, [
        "username",
        "_id",
        "name",
        "lastname",
        "email",
        "rol",
        "createdAt",
        "updatedAt"
      ])
    );
  else return res.status(401).json({ status: "No user session present" });
});

//Image Upload
router.post("/upload", uploader.single("imageUrl"), async (req, res, next) => {
  const imageUpload = req.file.secure_url;

  if (!req.file) {
    next(new Error("There is no file to upload"));
    return;
  }
  if (req.user) {
    await User.findByIdAndUpdate(
      req.user._id,
      {
        image: imageUpload
      },
      { new: true }
    );
  }
  res.json({
    secure_url: imageUpload,
    status: 200,
    message: "Uploaded image"
  });
});

module.exports = router;
