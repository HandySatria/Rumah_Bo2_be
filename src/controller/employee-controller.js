import employeeService from '../service/employee-service.js';

const CreateEmployee = async (req, res, next) => {
  try {
    const user = req.user;
    const request = req.body;
    const result = await employeeService.CreateEmployee(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
     next(error);
  }
};

const GetEmployeeById = async (req, res, next) => {
  try {
    const id = req.body.employee_id;
    const result = await employeeService.GetEmployeeById(id);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const UpdateEmployee = async (req, res, next) => {
  try {
    const user = req.user;
    // const contactId = req.params.contactId;
    const request = req.body;
    // request.id = contactId;

    const result = await employeeService.UpdateEmployee(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const DeleteEmployeeById = async (req, res, next) => {
  try {
    const user = req.user;
    const id = req.body.employee_id;

    await employeeService.DeleteEmployeeById(id);
    res.status(200).json({
      data: 'OK',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  CreateEmployee,
  GetEmployeeById,
  UpdateEmployee,
  DeleteEmployeeById,
};
