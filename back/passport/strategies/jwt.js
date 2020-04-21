const passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'formula1';
passport.use(
  new JwtStrategy(opts, function (jwtPayload, done) {
    return done(null, jwtPayload);
    // User.findOne({id: jwt_payload.sub}, function (err, user) {
    //   if (err) {
    //     return done(err, false);
    //   }
    //   if (user) {
    //     return done(null, user);
    //   } else {
    //     return done(null, false);
    //   }
    // });
  })
);
