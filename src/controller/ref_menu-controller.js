import refMenuService from '../service/ref_menu-service.js';

const CreateRefMenu = async (req, res, next) => {
  try {
    const user = req.user;
    const request = req.body;
    const result = await refMenuService.CreateRefMenu(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const GetRefMenuById = async (req, res, next) => {
  try {
    const id = req.body.ref_menu_id;
    const result = await refMenuService.GetRefMenuById(id);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const UpdateRefMenu = async (req, res, next) => {
  try {
    const user = req.user;
    // const contactId = req.params.contactId;
    const request = req.body;
    // request.id = contactId;

    const result = await refMenuService.UpdateRefMenu(user, request);
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const DeleteRefMenuById = async (req, res, next) => {
  try {
    const id = req.body.ref_menu_id;

    await refMenuService.DeleteRefMenuById(id);
    res.status(200).json({
      data: 'OK',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  CreateRefMenu,
  GetRefMenuById,
  UpdateRefMenu,
  DeleteRefMenuById,
};
