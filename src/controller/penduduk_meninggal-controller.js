import pendudukMeninggalService from '../service/penduduk_meninggal-service.js';

const CreatePendudukMeninggal = async (req, res, next) => {
  try {
    const user = req.user;
    const request = req.body;
    const result = await pendudukMeninggalService.CreatePendudukMeninggal(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const GetPendudukMeninggalById = async (req, res, next) => {
  try {
    const id = req.body.penduduk_meninggal_id;
    const result = await pendudukMeninggalService.GetPendudukMeninggalById(id);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const UpdatePendudukMeninggal = async (req, res, next) => {
  try {
    const user = req.user;
    // const contactId = req.params.contactId;
    const request = req.body;
    // request.id = contactId;

    const result = await pendudukMeninggalService.UpdatePendudukMeninggal(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const DeletePendudukMeninggalById = async (req, res, next) => {
  try {
    const id = req.body.penduduk_meninggal_id;

    await pendudukMeninggalService.DeletePendudukMeninggalById(id);
    res.status(200).json({
      data: 'OK',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  CreatePendudukMeninggal,
  GetPendudukMeninggalById,
  UpdatePendudukMeninggal,
  DeletePendudukMeninggalById,
};
