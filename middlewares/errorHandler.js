function errorHandler(err, req, res, next) {
  // console.log('err handler atas', err)
  let message = []
  let status = null

  if (err.name === 'ValidationError') {
    status = 400
    for (let key in err.errors) {
      message.push(err.errors[key].message)
    }
    
  } else if (err.name === 'CastError') {
    status = 404
    message.push('Data tidak ditemukan.')

  } else if (err.name === 'JsonWebTokenError') {
    status = 401
    message.push('Mohon login terlebih dahulu.')

  } else {
    if (err.status) status = err.status
    else status = 500
    message.push(err.message)
  }

  res.status(status).json({ status, message })
}

module.exports = errorHandler