import { prismaClient } from '../application/database.js';
import { ResponseError } from '../error/response-error.js';
import { createRefRoleValidation, getRefRoleValidation, updateRefRoleValidation } from '../validation/ref_role-validation.js';
import { setUserCreate, setUserUpdate, validate } from '../validation/validation.js';


const CreateRefRole = async (user, request) => {
  const RefRole = validate(createRefRoleValidation, request);

  const countRefRole = await prismaClient.ref_role.count({
      where: {
        role_code : RefRole.role_code,
        menu_code : RefRole.menu_code,
    },
  });

  if (countRefRole === 1) {
    throw new ResponseError(400, `data menu code ${RefRole.menu_code} sudah ada pada role code ${ RefRole.role_code}`);
  }

  const data = setUserCreate(user,RefRole);
  const result = await prismaClient.ref_role.create({
    data: data
  });

  return result;
};

  
const GetRefRoleById = async (id) => {
    id = validate(getRefRoleValidation, id);

    const RefRole = await prismaClient.ref_role.findFirst({
    where: {
        ref_role_id: id,
    },
    });
    if (!RefRole) {
    throw new ResponseError(404, 'data is not found');
    }

    return RefRole;
};

const GetAllRefRole = async () => {
    const RefRole = await prismaClient.ref_role.findMany({
    });
    if (!RefRole) {
    throw new ResponseError(404, 'data is not found');
    }

    return RefRole;
};

const UpdateRefRole = async (user, request) => {
    const RefRole = validate(updateRefRoleValidation, request);

    const cekRefRoleIdExist = await prismaClient.ref_role.findUnique({
    where: {
        ref_role_id : RefRole.ref_role_id,
    },
    });
    if (!cekRefRoleIdExist) {
        throw new ResponseError(404, 'data not found');
    }

    const cekMenuCodeExist = await prismaClient.ref_role.findFirst({
        where: {
          role_code : RefRole.role_code,
          menu_code : RefRole.menu_code,
      },
    });
  
    if (cekMenuCodeExist && cekMenuCodeExist.ref_role_id != cekRefRoleIdExist.ref_role_id) {
      throw new ResponseError(400, `data menu code ${RefRole.menu_code} sudah ada pada role code ${ RefRole.role_code}`);
    }
  
    const data = setUserUpdate(user,RefRole);
    return prismaClient.ref_role.update({
        where: {
            ref_role_id: RefRole.ref_role_id,
        },
        data: data
    });
};

const DeleteRefRoleById = async (id) => {
    id = validate(getRefRoleValidation, id);

    const totalRefRoleInDatabase = await prismaClient.ref_role.count({
    where: {
        ref_role_id: id,
    },
    });

    if (totalRefRoleInDatabase !== 1) {
    throw new ResponseError(404, 'data is not found');
    }

    return prismaClient.ref_role.delete({
    where: {
        ref_role_id: id,
    },
    });
};



export default {
   CreateRefRole,
   GetRefRoleById,
   GetAllRefRole,
   UpdateRefRole,
   DeleteRefRoleById
};
