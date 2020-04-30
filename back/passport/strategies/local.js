const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../models/User');
const {checkHashed} = require('../../lib/hashing');

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const foundUser = await User.findOne({username});
      if (foundUser) {
        if (checkHashed(password, foundUser.password)) {
          done(null, foundUser);
        } else {
          done(null, false, {message: 'Incorrect password.'});
        }
      } else {
        return done(null, false, {message: 'Incorrect username.'});
      }
    } catch (error) {
      done(error);
    }
  })
);
