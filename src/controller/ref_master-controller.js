import refMasterService from '../service/ref_master-service.js';

const CreateRefMaster = async (req, res, next) => {
  try {
    const user = req.user;
    const request = req.body;
    const result = await refMasterService.CreateRefMaster(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const GetRefMasterById = async (req, res, next) => {
  try {
    const id = req.body.ref_master_id;
    const result = await refMasterService.GetRefMasterById(id);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const UpdateRefMaster = async (req, res, next) => {
  try {
    const user = req.user;
    // const contactId = req.params.contactId;
    const request = req.body;
    // request.id = contactId;

    const result = await refMasterService.UpdateRefMaster(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const DeleteRefMasterById = async (req, res, next) => {
  try {
    const user = req.user;
    const id = req.body.ref_master_id;

    await refMasterService.DeleteRefMasterById(id);
    res.status(200).json({
      data: 'OK',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  CreateRefMaster,
  GetRefMasterById,
  UpdateRefMaster,
  DeleteRefMasterById,
};
