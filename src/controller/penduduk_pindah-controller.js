import pendudukPindahService from '../service/penduduk_pindah-service.js';

const CreatePendudukPindah = async (req, res, next) => {
  try {
    const user = req.user;
    const request = req.body;
    const result = await pendudukPindahService.CreatePendudukPindah(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const GetPendudukPindahById = async (req, res, next) => {
  try {
    const id = req.body.penduduk_pindah_id;
    const result = await pendudukPindahService.GetPendudukPindahById(id);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const UpdatePendudukPindah = async (req, res, next) => {
  try {
    const user = req.user;
    // const contactId = req.params.contactId;
    const request = req.body;
    // request.id = contactId;

    const result = await pendudukPindahService.UpdatePendudukPindah(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const DeletePendudukPindahById = async (req, res, next) => {
  try {
    const user = req.user;
    const id = req.body.penduduk_pindah_id;

    await pendudukPindahService.DeletePendudukPindahById(id);
    res.status(200).json({
      data: 'OK',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  CreatePendudukPindah,
  GetPendudukPindahById,
  UpdatePendudukPindah,
  DeletePendudukPindahById,
};
