const bcrypt = require('bcryptjs')


function hashPassword (password) {
  let salt = bcrypt.genSaltSync(10)
  let hash = bcrypt.hashSync(password, salt)
  return hash;
}


function checkPassword (hashedPassword, inputPassword) {
  return bcrypt.compareSync(inputPassword, hashedPassword);
}

module.exports = {
  hashPassword,
  checkPassword
}