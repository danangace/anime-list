const User = require('../models/user');
const { checkPassword } = require('../helpers/password');
const { generateToken } = require('../helpers/jwt');

class UserController {
  static async register (req, res, next) {
    const { username, email, password } = req.body
    try {
      const newUser = await User.create({
        username,
        email,
        password,
        is_email : false
      })
      let payload = {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        password: newUser.password
      }
      res.status(201).json({
        username: newUser.username,
        email: newUser.email,
        token: generateToken(payload)
      });
    } catch (error) {
      next(error)
    }
  }

  static async login (req, res, next) {
    const { identity, password } = req.body
    if (!identity) throw { message: "Email atau password harus diisi" }
    if (!password) throw { message: "Password harus diisi" }
    try {
      const userLoggedIn = await User.findOne({ $or: [{ username: identity }, { email: identity }] })
      if (!userLoggedIn) throw { message: "User tidak ditemukan" }
      let validPassword = checkPassword(userLoggedIn.password, password)
      if (!validPassword) throw { message: "Password kamu salah" }
      let payload = {
        id: userLoggedIn.id,
        username: userLoggedIn.username,
        email: userLoggedIn.email,
        password: userLoggedIn.password
      }
      res.status(200).json({
        user: userLoggedIn,
        token: generateToken(payload)
      })
    } catch (error) {
      next(error) 
    }
  }
}

module.exports = UserController