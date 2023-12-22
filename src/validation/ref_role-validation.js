import Joi from 'joi';

const createRefRoleValidation = Joi.object({
  role_code: Joi.string().max(100).required(),
  menu_code: Joi.string().max(100).required(),
  user_crt: Joi.string().max(100).optional(),
  user_upd: Joi.string().max(100).optional(),
  dtm_crt: Joi.date().optional(),
  dtm_upd: Joi.date().optional(),
}).options({ abortEarly: false, allowUnknown: false });

const getRefRoleValidation = Joi.number().min(1).positive().required();

const updateRefRoleValidation = Joi.object({
    ref_role_id : Joi.number().min(1).positive().required(),
    role_code: Joi.string().max(100).required(),
    menu_code: Joi.string().max(100).required(),
    user_crt: Joi.string().max(100).optional(),
    user_upd: Joi.string().max(100).optional(),
    dtm_crt: Joi.date().optional(),
    dtm_upd: Joi.date().optional(),
}).options({ abortEarly: false, allowUnknown: false });

export {
    createRefRoleValidation,
    getRefRoleValidation,
    updateRefRoleValidation,
};