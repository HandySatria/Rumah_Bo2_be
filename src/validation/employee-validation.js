import Joi from 'joi';

const createEmployeeValidation = Joi.object({
  employee_name: Joi.string().max(150).required(),
  nik: Joi.string().max(30).required(),
  jabatan: Joi.string().max(150).required(),
  posisi: Joi.string().max(150).optional().empty(''),
  user_crt: Joi.string().max(100).optional(),
  user_upd: Joi.string().max(100).optional(),
  dtm_crt: Joi.date().optional(),
  dtm_upd: Joi.date().optional(),
}).options({ abortEarly: false, allowUnknown: false });

const getEmployeeValidation = Joi.number().min(1).positive().required();

const updateEmployeeValidation = Joi.object({
  employee_id : Joi.number().min(1).positive().required(),
  nik: Joi.string().max(30).required(),
  employee_name: Joi.string().max(150).required(),
  jabatan: Joi.string().max(150).required(),
  posisi: Joi.string().max(150).optional().empty(''),
  user_crt: Joi.string().max(100).optional(),
  user_upd: Joi.string().max(100).optional(),
  dtm_crt: Joi.date().optional(),
  dtm_upd: Joi.date().optional(),
}).options({ abortEarly: false, allowUnknown: false });

export {
    createEmployeeValidation,
    getEmployeeValidation,
    updateEmployeeValidation,
};