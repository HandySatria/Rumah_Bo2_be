import Joi from 'joi';

const createPendudukMeninggalValidation = Joi.object({
  penduduk_id : Joi.number().min(1).positive().required(),
  nik: Joi.string().max(30).required(),
  tanggal_meninggal: Joi.date().optional(),
  umur_meninggal: Joi.number().positive().optional().empty(''),
  penyebab_meninggal: Joi.string().max(150).optional().empty(''),
  user_crt: Joi.string().max(100).optional(),
  user_upd: Joi.string().max(100).optional(),
  dtm_crt: Joi.date().optional(),
  dtm_upd: Joi.date().optional(),
}).options({ abortEarly: false, allowUnknown: false });

const getPendudukMeninggalValidation = Joi.number().min(1).positive().required();

const updatePendudukMeninggalValidation = Joi.object({
    penduduk_meninggal_id : Joi.number().min(1).positive().required(),
    penduduk_id : Joi.number().min(1).positive().required(),
    nik: Joi.string().max(30).required(),
    tanggal_meninggal: Joi.date().optional(),
    umur_meninggal: Joi.number().positive().optional().empty(''),
    penyebab_meninggal: Joi.string().max(150).optional().empty(''),
    user_crt: Joi.string().max(100).optional(),
    user_upd: Joi.string().max(100).optional(),
    dtm_crt: Joi.date().optional(),
    dtm_upd: Joi.date().optional(),
}).options({ abortEarly: false, allowUnknown: false });

export {
    createPendudukMeninggalValidation,
    getPendudukMeninggalValidation,
    updatePendudukMeninggalValidation,
};
