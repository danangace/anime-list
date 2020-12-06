const routes = require('.')

const router = require('express').Router()

router.get('/', (req,res) => {
  res.send('Mantap Favorite')
})

module.exports = router