import { prismaClient } from '../application/database.js';
import { ResponseError } from '../error/response-error.js';
import { createRefMasterValidation, getRefMasterValidation, updateRefMasterValidation } from '../validation/ref_master-validation.js';
import { setUserCreate, setUserUpdate, validate } from '../validation/validation.js';


const CreateRefMaster = async (user, request) => {
  const RefMaster = validate(createRefMasterValidation, request);

  const countRefMaster = await prismaClient.ref_master.count({
    where: {
      master_type : RefMaster.master_type,
      master_key : RefMaster.master_key
    },
  });

  if (countRefMaster === 1) {
    throw new ResponseError(400, 'data dengan master type dan master key ini sudah ada');
  }

  const data = setUserCreate(user,RefMaster);
  const result = await prismaClient.ref_master.create({
    data: data
  });

  return result;
};

  
const GetRefMasterById = async (id) => {
    id = validate(getRefMasterValidation, id);

    const RefMaster = await prismaClient.ref_master.findFirst({
    where: {
        ref_master_id: id,
    },
    });
    if (!RefMaster) {
    throw new ResponseError(404, 'data is not found');
    }

    return RefMaster;
};

const GetAllRefMaster = async () => {
    const RefMaster = await prismaClient.ref_master.findMany({
    });
    if (!RefMaster) {
    throw new ResponseError(404, 'data is not found');
    }

    return RefMaster;
};

const UpdateRefMaster = async (user, request) => {
    const RefMaster = validate(updateRefMasterValidation, request);

    const cekRefMasterIdExist = await prismaClient.ref_master.findUnique({
    where: {
        ref_master_id : RefMaster.ref_master_id,
    },
    });
    if (!cekRefMasterIdExist) {
    throw new ResponseError(404, 'data not found');
    }

    const cekMasterKeyExist = await prismaClient.ref_master.findFirst({
      where: {
        master_type : RefMaster.master_type,
        master_key : RefMaster.master_key
      },
    });
  
    if (cekMasterKeyExist && cekMasterKeyExist.ref_master_id != cekRefMasterIdExist.ref_master_id) {
      throw new ResponseError(400, 'data dengan master type dan master key ini sudah ada');
    }

    const data = setUserUpdate(user,RefMaster);
    return prismaClient.ref_master.update({
    where: {
        ref_master_id: RefMaster.ref_master_id,
    },
    data: data
    });
};

const DeleteRefMasterById = async (id) => {
    id = validate(getRefMasterValidation, id);

    const totalRefMasterInDatabase = await prismaClient.ref_master.count({
    where: {
        ref_master_id: id,
    },
    });

    if (totalRefMasterInDatabase !== 1) {
    throw new ResponseError(404, 'data is not found');
    }

    return prismaClient.ref_master.delete({
    where: {
        ref_master_id: id,
    },
    });
};



export default {
   CreateRefMaster,
   GetRefMasterById,
   GetAllRefMaster,
   UpdateRefMaster,
   DeleteRefMasterById
};
