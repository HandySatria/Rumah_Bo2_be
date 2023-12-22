import Joi from 'joi';

const createPendudukPindahValidation = Joi.object({
  penduduk_id: Joi.number().min(1).positive().required(),
  nik: Joi.string().max(30).required(),
  tanggal_pindah: Joi.date().optional(),
  alamat_pindah: Joi.string().max(200).optional().empty(''),
  penyebab_pindah: Joi.string().max(150).optional().empty(''),
  user_crt: Joi.string().max(100).optional(),
  user_upd: Joi.string().max(100).optional(),
  dtm_crt: Joi.date().optional(),
  dtm_upd: Joi.date().optional(),
}).options({ abortEarly: false, allowUnknown: false });

const getPendudukPindahValidation = Joi.number().min(1).positive().required();

const updatePendudukPindahValidation = Joi.object({
  penduduk_pindah_id: Joi.number().min(1).positive().required(),
  penduduk_id: Joi.number().min(1).positive().required(),
  nik: Joi.string().max(30).required(),
  tanggal_pindah: Joi.date().optional(),
  alamat_pindah: Joi.string().max(200).optional().empty(''),
  penyebab_pindah: Joi.string().max(150).optional().empty(''),
  user_crt: Joi.string().max(100).optional(),
  user_upd: Joi.string().max(100).optional(),
  dtm_crt: Joi.date().optional(),
  dtm_upd: Joi.date().optional(),
}).options({ abortEarly: false, allowUnknown: false });

export {
    createPendudukPindahValidation,
    getPendudukPindahValidation,
    updatePendudukPindahValidation,
};
