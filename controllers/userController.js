const auth = require("../auth/auth");
const ErrorsWrapper = require("../errors/ErrorsWrapper");

const signUp = ErrorsWrapper(async (req, res, next) => {
	const { newUser, token } = await auth.signup(req.body);

	res.status(201).json({
		status: "success",
    data: newUser,
    token,
	});
});

const signIn = (req, res, next) => {};

module.exports = {
	signIn,
	signUp,
};
