const passport = require('passport');
const User = require('../../models/User');
var JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'formula1';
passport.use(
  new JwtStrategy(opts, function (jwtPayload, done) {
    User.findById(jwtPayload._id, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user.toObject());
      } else {
        return done(null, false);
      }
    }).populate('league');
  })
);
