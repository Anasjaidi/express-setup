const proErrors = (err, res) => {};

const testErrors = (err, res) => {
	res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
		stack: err.stack,
		err,
	});
};
const devErrors = (err, res) => {
	res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
		stack: err.stack,
		err,
	});
};

module.exports = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;

	err.status = err.status || "error";

	if (req.app.get("env") === "development") {
	} else if (req.app.get("env") === "testing") {
	} else {
		// production
	}
};
