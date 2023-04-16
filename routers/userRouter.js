const express = require("express");
const userController = require("../controllers/userController");
const Validator = require("../helpers/JoiValidator");
const userSchemas = require("../validation/userSechemas");

const router = express.Router();

router.post(
	"/signup",
	Validator(userSchemas.userSignUpSchema),
	userController.signUp
);
router.post(
	"/signin",
	Validator(userSchemas.userSignInSchema),
	userController.signIn
);

module.exports = router;
