const Movie = require('../models/movie')

class MovieController {
  static async submitMovie (req,res,next) {
    const { title, description, slug, avatar } = req.body;
    let payload = {
      title,
      description,
      slug,
      avatar,
      creator: req.loggedUser.id
    }
    if(!avatar) payload.avatar = 'https://images.solopos.com/2020/09/ios-14-widgets-header.jpg' 
    try {
      const newMovie = await Movie.create(payload);
      res.status(201).json({
        slug: newMovie.slug
      })
    } catch (error) {
      next(error)
    }
  }

  static async getListMovie (req,res,next) {
  }

  static async getDetailMovie (req,res,next) {
  }
}

module.exports = MovieController