import { prismaClient } from '../application/database.js';
import { ResponseError } from '../error/response-error.js';
import { createRefMenuValidation, getRefMenuValidation, updateRefMenuValidation } from '../validation/ref_menu-validation.js';
import { setUserCreate, setUserUpdate, validate } from '../validation/validation.js';


const CreateRefMenu = async (user, request) => {
  const RefMenu = validate(createRefMenuValidation, request);

  const countRefMenu = await prismaClient.ref_menu.count({
    where: {
      menu_code : RefMenu.menu_code,
    },
  });

  if (countRefMenu === 1) {
    throw new ResponseError(400, 'data menu code ini sudah ada');
  }

  const data = setUserCreate(user,RefMenu);
  const result = await prismaClient.ref_menu.create({
    data: data
  });

  return result;
};

  
const GetRefMenuById = async (id) => {
    id = validate(getRefMenuValidation, id);

    const RefMenu = await prismaClient.ref_menu.findFirst({
    where: {
        ref_menu_id: id,
    },
    });
    if (!RefMenu) {
    throw new ResponseError(404, 'data is not found');
    }

    return RefMenu;
};

const GetAllRefMenu = async () => {
    const RefMenu = await prismaClient.ref_menu.findMany({
    });
    if (!RefMenu) {
    throw new ResponseError(404, 'data is not found');
    }

    return RefMenu;
};

const UpdateRefMenu = async (user, request) => {
    const RefMenu = validate(updateRefMenuValidation, request);

    const cekRefMenuIdExist = await prismaClient.ref_menu.findUnique({
    where: {
        ref_menu_id : RefMenu.ref_menu_id,
    },
    });

    if (!cekRefMenuIdExist) {
     throw new ResponseError(404, 'data not found');
    }

    const cekRefMenuCodeExist = await prismaClient.ref_menu.findFirst({
        where: {
          menu_code : RefMenu.menu_code,
        },
      });
    
      if (cekRefMenuCodeExist && cekRefMenuCodeExist.ref_menu_id != cekRefMenuIdExist.ref_menu_id) {
        throw new ResponseError(400, 'data menu code ini sudah ada');
      }

    const data = setUserUpdate(user,RefMenu);
    return prismaClient.ref_menu.update({
        where: {
            ref_menu_id: RefMenu.ref_menu_id,
        },
        data: data
    });
};

const DeleteRefMenuById = async (id) => {
    id = validate(getRefMenuValidation, id);

    const totalRefMenuInDatabase = await prismaClient.ref_menu.count({
    where: {
        ref_menu_id: id,
    },
    });

    if (totalRefMenuInDatabase !== 1) {
    throw new ResponseError(404, 'data is not found');
    }

    return prismaClient.ref_menu.delete({
    where: {
        ref_menu_id: id,
    },
    });
};



export default {
   CreateRefMenu,
   GetRefMenuById,
   GetAllRefMenu,
   UpdateRefMenu,
   DeleteRefMenuById
};
