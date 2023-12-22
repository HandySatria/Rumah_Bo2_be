import Joi from 'joi';

const createRefMenuValidation = Joi.object({
  menu_code: Joi.string().max(100).required(),
  menu_name: Joi.string().max(100).required(),
  is_active: Joi.boolean().required(),
  user_crt: Joi.string().max(100).optional(),
  user_upd: Joi.string().max(100).optional(),
  dtm_crt: Joi.date().optional(),
  dtm_upd: Joi.date().optional(),
}).options({ abortEarly: false, allowUnknown: false });

const getRefMenuValidation = Joi.number().min(1).positive().required();

const updateRefMenuValidation = Joi.object({
  ref_menu_id: Joi.number().min(1).positive().required(),
  menu_code: Joi.string().max(100).required(),
  menu_name: Joi.string().max(100).required(),
  is_active: Joi.boolean().required(),
  user_crt: Joi.string().max(100).optional(),
  user_upd: Joi.string().max(100).optional(),
  dtm_crt: Joi.date().optional(),
  dtm_upd: Joi.date().optional(),
}).options({ abortEarly: false, allowUnknown: false });

export {
    createRefMenuValidation,
    getRefMenuValidation,
    updateRefMenuValidation,
};