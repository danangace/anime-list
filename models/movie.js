const { Schema, model, Types } = require('mongoose');

const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Judul movie harus diisi']
  },
  description: {
    type: String,
    required: [true, 'Description harus diisi']
  },
  slug: {
    type: String,
    required: [true, 'Slug harus diisi'],
    validate: [
      {
        validator: isSlugUnique,
        message: "Slug sudah pernah digunakan"
      }
    ]
  },
  avatar: {
    type: String
  },
  creator: {
    type: Types.ObjectId
  }
},
{
  versionKey: false,
  timestamps: true
})

function isSlugUnique (value) {
  return Movie.findOne({ slug: value }).then(found => {
    return found ? false : true
  })
}

const Movie = model('Movie', movieSchema)

module.exports = Movie