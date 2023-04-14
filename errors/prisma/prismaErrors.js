const uniqueValueError = (err, res) => {
  const message = err.meta.taget.join(', ') + " needs to be unique."
  res.status(409).json({
    status: "fail",
    message
  })
}


const invalidToken = (err, res) => {
  const message = "invalid token, please re login."
  res.status(401).json({
    status: "fail",
    message
  })
}

module.exports = {uniqueValueError, invalidToken}