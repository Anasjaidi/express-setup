const ErrorsWrapper = require("../errors/ErrorsWrapper");

const getHome = ErrorsWrapper((req, res, next) => {
	res.status(200).json({
		status: "success",
	});
});


module.exports = {getHome}
