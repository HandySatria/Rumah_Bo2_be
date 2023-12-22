import pendudukService from '../service/penduduk-service.js';

const CreatePenduduk = async (req, res, next) => {
  try {
    const user = req.user;
    const request = req.body;
    const result = await pendudukService.CreatePenduduk(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const GetPendudukById = async (req, res, next) => {
  try {
    const id = req.body.penduduk_id;
    const result = await pendudukService.GetPendudukById(id);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const UpdatePenduduk = async (req, res, next) => {
  try {
    const user = req.user;
    // const contactId = req.params.contactId;
    const request = req.body;
    // request.id = contactId;

    const result = await pendudukService.UpdatePenduduk(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const DeletePendudukById = async (req, res, next) => {
  try {
    const id = req.body.penduduk_id;

    await pendudukService.DeletePendudukById(id);
    res.status(200).json({
      data: 'OK',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  CreatePenduduk,
  GetPendudukById,
  UpdatePenduduk,
  DeletePendudukById,
};
