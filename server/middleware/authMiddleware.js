const jwt = require('jsonwebtoken');
const dbConfig = require('../config/db');

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.substring(7) : null;

  if (!token) return res.status(401).send('Access Denied');

  jwt.verify(token, dbConfig.wt_secret, (err, decoded) => {
    if (err) {
      console.error('Token verification error:', err);
      return res.status(401).send('Invalid Token');
    }
    req.userId = decoded.userId;
    next();
  });
};
