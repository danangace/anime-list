const bcrypt = require('bcryptjs')

function hashPassword (password) {
  let salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

function checkPassword (hashedPassword, inputPassword) {
  return bcrypt.compareSync(inputPassword, hashedPassword);
}

module.exports = {
  hashPassword,
  checkPassword
}