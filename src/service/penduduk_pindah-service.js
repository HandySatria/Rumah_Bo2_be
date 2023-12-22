import { prismaClient } from '../application/database.js';
import { ResponseError } from '../error/response-error.js';
import { createPendudukPindahValidation, getPendudukPindahValidation, updatePendudukPindahValidation } from '../validation/penduduk_pindah-validation.js';
import { setUserCreate, setUserUpdate, validate } from '../validation/validation.js';


const CreatePendudukPindah = async (user, request) => {
  const PendudukPindah = validate(createPendudukPindahValidation, request);

  const countPendudukPindah = await prismaClient.penduduk_pindah.count({
    where: {
      penduduk_id : PendudukPindah.penduduk_id
    },
  });

  if (countPendudukPindah === 1) {
    throw new ResponseError(400, 'data dengan penduduk id ini sudah ada');
  }

  const data = setUserCreate(user,PendudukPindah);
  const result = await prismaClient.penduduk_pindah.create({
    data: data,
    select: {
      penduduk_pindah_id: true,
      nik: true,
    },
  });

  return result;
};

  
const GetPendudukPindahById = async (id) => {
    id = validate(getPendudukPindahValidation, id);

    const PendudukPindah = await prismaClient.penduduk_pindah.findFirst({
    where: {
        penduduk_pindah_id: id,
    },
    });
    if (!PendudukPindah) {
    throw new ResponseError(404, 'data is not found');
    }

    return PendudukPindah;
};

const GetAllPendudukPindah = async () => {
    const PendudukPindah = await prismaClient.penduduk_pindah.findMany({
    });
    if (!PendudukPindah) {
    throw new ResponseError(404, 'data is not found');
    }

    return PendudukPindah;
};

const UpdatePendudukPindah = async (user, request) => {
    const PendudukPindah = validate(updatePendudukPindahValidation, request);

    const totalPendudukPindahInDatabase = await prismaClient.penduduk_pindah.count({
    where: {
        penduduk_pindah_id : PendudukPindah.penduduk_pindah_id,
    },
    });
    if (totalPendudukPindahInDatabase !== 1) {
    throw new ResponseError(404, 'data not found');
    }

    const data = setUserUpdate(user,PendudukPindah);
    return prismaClient.penduduk_pindah.update({
    where: {
        penduduk_pindah_id: PendudukPindah.penduduk_pindah_id,
    },
    data: data
    });
};

const DeletePendudukPindahById = async (id) => {
    id = validate(getPendudukPindahValidation, id);

    const totalPendudukPindahInDatabase = await prismaClient.penduduk_pindah.count({
    where: {
        penduduk_pindah_id: id,
    },
    });

    if (totalPendudukPindahInDatabase !== 1) {
    throw new ResponseError(404, 'data is not found');
    }

    return prismaClient.penduduk_pindah.delete({
    where: {
        penduduk_pindah_id: id,
    },
    });
};



export default {
   CreatePendudukPindah,
   GetPendudukPindahById,
   GetAllPendudukPindah,
   UpdatePendudukPindah,
   DeletePendudukPindahById
};
