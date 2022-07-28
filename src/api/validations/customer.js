const Joi = require("joi");

module.exports = {
  register: (data) => {
    return Joi.object({
      firstName: Joi.string().max(50).required(),
      lastName: Joi.string().max(50).required(),
      numberPhone: Joi.string().max(15).required(),
      email: Joi.string().email().lowercase().required(),
      password: Joi.string().min(6).required(),
    }).validate(data);
  },
  login: (data) => {
    return Joi.object({
      email: Joi.string().email().lowercase().required(),
      password: Joi.string().required(),
    }).validate(data);
  },
};
