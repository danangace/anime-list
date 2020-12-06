const { Schema, model } = require('mongoose');
const { hashPassword } = require('../helpers/password')

// define schema
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Nama pengguna wajib diisi'],
    validate: [
      {
        validator: isUsernameUnique,
        message: "Nama pengguna telah digunakan"
      }
    ]
  },
  password: {
    type: String,
    required: [true, "Password wajib diisi"],
    minlength: [6, "Kata sandi minimal 6 karakter"]
  },
  email: {
    type: String,
    required: [true, 'Email wajib diisi'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Format email salah'],
    validate: [
      {
        validator: isEmailUnique,
        message: "Email telah digunakan"
      }
    ]
  },
  is_admin: {
    type: Boolean,
    default: false
  }
},
{
  versionKey: false,
  timestamps: true
})

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

// hash password
userSchema.pre('save', function (next) {
  this.password = hashPassword(this.password)
  next()
})

const User = model('User', userSchema)

module.exports = User;