

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500

  err.status = err.status || "error"

  if (req.app.get('env') === 'development') {

  } else if (req.app.get('env') === 'testing') {

  } else { // production

  }
}