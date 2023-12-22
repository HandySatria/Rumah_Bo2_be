import refRoleService from '../service/ref_role-service.js';

const CreateRefRole = async (req, res, next) => {
  try {
    const user = req.user;
    const request = req.body;
    const result = await refRoleService.CreateRefRole(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const GetRefRoleById = async (req, res, next) => {
  try {
    const id = req.body.ref_role_id;
    const result = await refRoleService.GetRefRoleById(id);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const UpdateRefRole = async (req, res, next) => {
  try {
    const user = req.user;
    // const contactId = req.params.contactId;
    const request = req.body;
    // request.id = contactId;

    const result = await refRoleService.UpdateRefRole(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const DeleteRefRoleById = async (req, res, next) => {
  try {
    const user = req.user;
    const id = req.body.ref_role_id;

    await refRoleService.DeleteRefRoleById(id);
    res.status(200).json({
      data: 'OK',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  CreateRefRole,
  GetRefRoleById,
  UpdateRefRole,
  DeleteRefRoleById,
};
