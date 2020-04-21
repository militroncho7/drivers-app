const isLoggedIn = () => (req, res, next) => {
  if (req.user) {
    return next();
  } else {
    res.status(403);
    return res.json({status: 401, message: 'User not logged in!'});
  }
};

const isLoggedOut = () => (req, res, next) => {
  if (!req.user) {
    return next();
  } else {
    res.status(403);
    return res.json({status: 401, message: 'User not logged in!'});
  }
};

module.exports = {isLoggedIn, isLoggedOut};
