import { prismaClient } from '../application/database.js';
import { ResponseError } from '../error/response-error.js';
import { createPendudukMeninggalValidation, getPendudukMeninggalValidation, updatePendudukMeninggalValidation } from '../validation/penduduk_meninggal-validation.js';
import { setUserCreate, setUserUpdate, validate } from '../validation/validation.js';


const CreatePendudukMeninggal = async (user, request) => {
  const PendudukMeninggal = validate(createPendudukMeninggalValidation, request);

  const countPendudukMeninggal = await prismaClient.penduduk_meninggal.count({
    where: {
      penduduk_id : PendudukMeninggal.penduduk_id
    },
  });

  if (countPendudukMeninggal === 1) {
    throw new ResponseError(400, 'data dengan penduduk id ini sudah ada');
  }

  const data = setUserCreate(user,PendudukMeninggal);
  const result = await prismaClient.penduduk_meninggal.create({
    data: data,
    select: {
      penduduk_meninggal_id: true,
      nik: true,
    },
  });

  return result;
};

  
const GetPendudukMeninggalById = async (id) => {
    id = validate(getPendudukMeninggalValidation, id);

    const PendudukMeninggal = await prismaClient.penduduk_meninggal.findFirst({
    where: {
        penduduk_meninggal_id: id,
    },
    });
    if (!PendudukMeninggal) {
    throw new ResponseError(404, 'data is not found');
    }

    return PendudukMeninggal;
};

const GetAllPendudukMeninggal = async () => {
    const PendudukMeninggal = await prismaClient.penduduk_meninggal.findMany({
    });
    if (!PendudukMeninggal) {
    throw new ResponseError(404, 'data is not found');
    }

    return PendudukMeninggal;
};

const UpdatePendudukMeninggal = async (user, request) => {
    const PendudukMeninggal = validate(updatePendudukMeninggalValidation, request);

    const totalPendudukMeninggalInDatabase = await prismaClient.penduduk_meninggal.count({
    where: {
        penduduk_meninggal_id : PendudukMeninggal.penduduk_meninggal_id,
    },
    });
    if (totalPendudukMeninggalInDatabase !== 1) {
    throw new ResponseError(404, 'data not found');
    }

    const data = setUserUpdate(user,PendudukMeninggal);
    return prismaClient.penduduk_meninggal.update({
    where: {
        penduduk_meninggal_id: PendudukMeninggal.penduduk_meninggal_id,
    },
    data: data
    });
};

const DeletePendudukMeninggalById = async (id) => {
    id = validate(getPendudukMeninggalValidation, id);

    const totalPendudukMeninggalInDatabase = await prismaClient.penduduk_meninggal.count({
    where: {
        penduduk_meninggal_id: id,
    },
    });

    if (totalPendudukMeninggalInDatabase !== 1) {
    throw new ResponseError(404, 'data is not found');
    }

    return prismaClient.penduduk_meninggal.delete({
    where: {
        penduduk_meninggal_id: id,
    },
    });
};



export default {
   CreatePendudukMeninggal,
   GetPendudukMeninggalById,
   GetAllPendudukMeninggal,
   UpdatePendudukMeninggal,
   DeletePendudukMeninggalById
};
