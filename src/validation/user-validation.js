import Joi from 'joi';

const registerUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  full_name: Joi.string().max(150).required(),
  password: Joi.string().max(100).required(),
  role_code: Joi.string().max(100).required(),
  employee_id: Joi.number().min(1).positive().optional(),
  user_crt: Joi.string().max(100).optional(),
  user_upd: Joi.string().max(100).optional(),
  dtm_crt: Joi.date().optional(),
  dtm_upd: Joi.date().optional(),  
}).options({ abortEarly: false, allowUnknown: false });

const loginUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
}).options({ abortEarly: false, allowUnknown: false });

const getUserValidation = Joi.string().max(100).required();

const updateUserValidation = Joi.object({
  user_id: Joi.number().min(1).positive().required(),
  username: Joi.string().max(100).required(),
  full_name: Joi.string().max(150).required(),
  password: Joi.string().max(100).required(),
  role_code: Joi.string().max(100).required(),
  employee_id: Joi.number().min(1).positive().optional(),
  user_crt: Joi.string().max(100).optional(),
  user_upd: Joi.string().max(100).optional(),
  dtm_crt: Joi.date().optional(),
  dtm_upd: Joi.date().optional(),
}).options({ abortEarly: false, allowUnknown: false });

export {
  registerUserValidation,
  loginUserValidation,
  getUserValidation,
  updateUserValidation,
};
