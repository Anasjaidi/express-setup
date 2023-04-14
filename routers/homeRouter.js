const express = require('express')
const ErrorsWrapper = require('../errors/ErrorsWrapper')
const auth = require('../auth/auth')
const homeController = require('../controllers/homeController')

const router  = express.Router()

router.route("/").get(ErrorsWrapper(auth.protectRoute), homeController.getHome)

module.exports = router