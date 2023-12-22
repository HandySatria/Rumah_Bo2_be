import { prismaClient } from '../application/database.js';
import { ResponseError } from '../error/response-error.js';
import {
    createEmployeeValidation, getEmployeeValidation, updateEmployeeValidation
} from '../validation/employee-validation.js';
import { setUserCreate, setUserUpdate, validate } from '../validation/validation.js';


const CreateEmployee = async (user, request) => {
  const employee = validate(createEmployeeValidation, request);

  const countEmployee = await prismaClient.employee.count({
    where: {
      jabatan: employee.jabatan,
      posisi: employee.posisi,
    },
  });

  if (countEmployee === 1) {
    throw new ResponseError(400, 'SOTK dengan jabatan dan posisi ini sudah ada');
  }

  const data = setUserCreate(user,employee);
  const result = await prismaClient.employee.create({
    data: data,
    select: {
      employee_id: true,
      nik: true,
      employee_name: true,
    },
  });

  return result;
};

  
const GetEmployeeById = async (id) => {
    id = validate(getEmployeeValidation, id);

    const employee = await prismaClient.employee.findFirst({
    where: {
        employee_id: id,
    },
    });
    if (!employee) {
    throw new ResponseError(404, 'employee is not found');
    }

    return employee;
};

const GetAllEmployee = async () => {
    const employee = await prismaClient.employee.findMany({
    });
    if (!employee) {
    throw new ResponseError(404, 'employee is not found');
    }

    return employee;
};

const UpdateEmployee = async (user, request) => {
    const employee = validate(updateEmployeeValidation, request);

    const cekEmployeeIdExist = await prismaClient.employee.findUnique({
    where: {
        employee_id : employee.employee_id,
    },
    });

    if (!cekEmployeeIdExist) {
      throw new ResponseError(404, 'employee id not found');
    }

    const cekJabatanExist = await prismaClient.employee.findFirst({
      where: {
        jabatan: employee.jabatan,
        posisi: employee.posisi,
      },
    });
  
    if (cekJabatanExist && cekJabatanExist.employee_id != cekEmployeeIdExist.employee_id) {
      throw new ResponseError(400, 'SOTK dengan jabatan dan posisi ini sudah ada');
    }

    const data = setUserUpdate(user,employee);
    return prismaClient.employee.update({
    where: {
        employee_id: employee.employee_id,
    },
    data: data
    });
};

const DeleteEmployeeById = async (id) => {
    id = validate(getEmployeeValidation, id);

    const totalEmployeeInDatabase = await prismaClient.employee.count({
    where: {
        employee_id: id,
    },
    });

    if (totalEmployeeInDatabase !== 1) {
    throw new ResponseError(404, 'employee is not found');
    }

    return prismaClient.employee.delete({
    where: {
        employee_id: id,
    },
    });
};



export default {
    CreateEmployee,
    GetEmployeeById,
    GetAllEmployee,
    UpdateEmployee,
    DeleteEmployeeById
};
