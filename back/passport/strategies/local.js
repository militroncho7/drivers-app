const passport = require("passport");
const crypto = require("crypto");

const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/User");
const { checkHashed } = require("../../lib/hashing");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const registeredUser = await User.findOne({ username });

      if (!registeredUser || !(registeredUser.password==crypto.createHash('sha256').update(password).digest('base64'))) {
        return done(null, false, { message: "Datos incorrectos" });
      } else {
        return done(null, registeredUser);
      }
    } catch (error) {
      done(error);
    }
  })
);
