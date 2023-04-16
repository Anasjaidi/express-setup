const express = require('express')
const userController = require('../controllers/userController')
const Joi = require('joi')
const Validator = require('../helpers/JoiValidator')

const router = express.Router()

const userSignUpSchema = Joi.object().keys({
  firstName: Joi.string().min(3).max(50).required(),
  lastName: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
  repeatpassword: Joi.ref('passowrd')
})

router.post('/signup', Validator(userSignUpSchema) ,userController.signUp)
router.post('/signin', userController.signIn)

module.exports = router