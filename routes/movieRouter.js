const router = require('express').Router()
const authenticate = require('../middlewares/authenticate')
const { submitMovie, getListMovie, getDetailMovie } = require('../controllers/movieController')

router.get('/', authenticate, getListMovie);
router.get('/:id', authenticate, getDetailMovie);
router.post('/', authenticate, submitMovie);

module.exports = router