const User = require('../models/user');
const { verifyToken } = require('../helpers/jwt');

module.exports = ( req, _, next) => {
  console.log('masuk sini authenticate dulu')
  console.log(req.headers.access_token)
  let decoded = verifyToken(req.headers.access_token);
  console.log(decoded, 'ini decoded')

  if (!decoded) throw {
    status: 401,
    message: "Anda tidak memiliki akses"
  }

  User
    .findById({ _id: decoded.id })
    .then(child => {
      if (!child) throw {
        status: 401,
        message: 'Anda tidak memiliki akses.'
      }

      req.loggedUser = decoded
      next()
    })
    .catch(next)
}