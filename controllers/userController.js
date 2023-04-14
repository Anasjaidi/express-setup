const auth = require("../auth/auth");
const AppError = require("../errors/AppError");
const ErrorsWrapper = require("../errors/ErrorsWrapper");
const userDAO = require("../models/userDAO");

const signUp = ErrorsWrapper(async (req, res, next) => {
	const { newUser, token } = await auth.signup(req.body);

	res.status(201).json({
		status: "success",
		data: newUser,
		token,
	});
});

const signIn = ErrorsWrapper(async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password)
		next(new AppError.BadRequest("email or password are missings."));

	const token = await auth.signin({ email, password });

	res.status(200).json({
		status: "success",
		token
	});
});

module.exports = {
	signIn,
	signUp,
};
