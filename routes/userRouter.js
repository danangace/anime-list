const router = require('express').Router()
const UserController = require('../controllers/userController')

router.get('/', (req,res) => {
  res.send('Mantap User')
})

module.exports = router