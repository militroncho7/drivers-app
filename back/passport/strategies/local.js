const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../../models/User");
const { checkHashed } = require("../../lib/hashing");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const registeredUser = await User.findOne({ username });

      if (!registeredUser || !checkHashed(password, registeredUser.password)) {
        return done(null, false, { message: "Datos incorrectos" });
      } else {
        return done(null, registeredUser);
      }
    } catch (error) {
      done(error);
    }
  })
);
