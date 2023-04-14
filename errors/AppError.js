const httpErrors = require("http-errors");


class AppError extends httpErrors {
	constructor(statusCode, message) {
		super(statusCode, message);

		this.isOperational = true;
	}
}

module.exports = AppError;
