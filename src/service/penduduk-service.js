import { prismaClient } from '../application/database.js';
import { ResponseError } from '../error/response-error.js';
import { createPendudukValidation, getPendudukValidation, updatePendudukValidation } from '../validation/penduduk-validation.js';
import { setUserCreate, setUserUpdate, validate } from '../validation/validation.js';


const CreatePenduduk = async (user, request) => {
  const Penduduk = validate(createPendudukValidation, request);

  const countPenduduk = await prismaClient.penduduk.count({
    where: {
      nik : Penduduk.nik
    },
  });

  if (countPenduduk >= 1) {
    throw new ResponseError(400, 'data dengan nik ini sudah ada');
  }

  const data = setUserCreate(user,Penduduk);
  const result = await prismaClient.penduduk.create({
    data: data,
    select: {
      penduduk_id: true,
      nik: true,
    },
  });

  return result;
};

  
const GetPendudukById = async (id) => {
    id = validate(getPendudukValidation, id);

    const Penduduk = await prismaClient.penduduk.findUnique({
    where: {
        penduduk_id: id,
    },
    });
    if (!Penduduk) {
    throw new ResponseError(404, 'data is not found');
    }

    return Penduduk;
};

const GetAllPenduduk = async () => {
    const Penduduk = await prismaClient.penduduk.findMany({
    });
    if (!Penduduk) {
    throw new ResponseError(404, 'data is not found');
    }

    return Penduduk;
};

const UpdatePenduduk = async (user, request) => {
    const Penduduk = validate(updatePendudukValidation, request);

    const cekPendudukIdExist = await prismaClient.penduduk.findUnique({
    where: {
        penduduk_id : Penduduk.penduduk_id,
    },
    });
    if (!cekPendudukIdExist) {
      throw new ResponseError(404, 'data not found');
    }

    const cekNikExist = await prismaClient.penduduk.findUnique({
      where: {
        nik : Penduduk.nik
      },
    });
  
    if (cekNikExist && cekNikExist.penduduk_id != cekPendudukIdExist.penduduk_id) {
      throw new ResponseError(400, 'nik ini sudah digunakan');
    }

    const data = setUserUpdate(user,Penduduk);
    return prismaClient.penduduk.update({
    where: {
        penduduk_id: Penduduk.penduduk_id,
    },
    data: data
    });
};

const DeletePendudukById = async (id) => {
    id = validate(getPendudukValidation, id);

    const totalPendudukInDatabase = await prismaClient.penduduk.count({
    where: {
        penduduk_id: id,
    },
    });

    if (totalPendudukInDatabase !== 1) {
      throw new ResponseError(404, 'data is not found');
    }

    return prismaClient.penduduk.delete({
    where: {
        penduduk_id: id,
    },
    });
};



export default {
   CreatePenduduk,
   GetPendudukById,
   GetAllPenduduk,
   UpdatePenduduk,
   DeletePendudukById
};
