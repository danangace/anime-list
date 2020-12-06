const User = require('../models/user')

function isUsernameUnique (value) {
  return User.findOne({ username: value }).then(found => {
    return found ? false : true
  })
}

function isEmailUnique (value) {
  return User.findOne({ email: value }).then(found => {
    return found ? false : true
  })
}

module.exports = {
  isUsernameUnique: isUsernameUnique,
  isEmailUnique: isEmailUnique
}