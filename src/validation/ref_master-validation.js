import Joi from 'joi';

const createRefMasterValidation = Joi.object({
  master_type: Joi.string().max(100).required(),
  master_key: Joi.string().max(100).required(),
  master_value: Joi.string().max(100).required(),
  user_crt: Joi.string().max(100).optional(),
  user_upd: Joi.string().max(100).optional(),
  dtm_crt: Joi.date().optional(),
  dtm_upd: Joi.date().optional(),
}).options({ abortEarly: false, allowUnknown: false });

const getRefMasterValidation = Joi.number().min(1).positive().required();

const mastrerTypeValidation = Joi.string().max(100).required();

const updateRefMasterValidation = Joi.object({
  ref_master_id: Joi.number().min(1).positive().required(),
  master_type: Joi.string().max(100).required(),
  master_key: Joi.string().max(100).required(),
  master_value: Joi.string().max(100).required(),
  user_crt: Joi.string().max(100).optional(),
  user_upd: Joi.string().max(100).optional(),
  dtm_crt: Joi.date().optional(),
  dtm_upd: Joi.date().optional(),
}).options({ abortEarly: false, allowUnknown: false });

export {
    createRefMasterValidation,
    getRefMasterValidation,
    updateRefMasterValidation,
    mastrerTypeValidation
};