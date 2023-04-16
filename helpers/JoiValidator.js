const ErrorsWrapper = require("../errors/ErrorsWrapper");
const joi = require("joi");
const AppError = require('../errors/AppError')


const Validator = async (schema) => {
	return ErrorsWrapper(async (req, res, next) => {
		const { error } = schema.validate(req.body);

    if (error) {
      next(new AppError(400, error.details[0].message));
    }
	});
};


module.exports = Validator