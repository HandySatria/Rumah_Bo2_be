import express from 'express';
import userController from '../controller/user-controller.js';
import employeeController from '../controller/employee-controller.js';
import pendudukController from '../controller/penduduk-controller.js';
import pendudukMeninggalController from '../controller/penduduk_meninggal-controller.js';
import pendudukPindahController from '../controller/penduduk_pindah-controller.js';
import refMasterController from '../controller/ref_master-controller.js';
import refMenuController from '../controller/ref_menu-controller.js';
import refRoleController from '../controller/ref_role-controller.js';
import { authMiddleware } from '../middleware/auth-middleware.js';

const userRouter = new express.Router();
userRouter.use(authMiddleware);

// User APIs
userRouter.post('/user/register', userController.register);
userRouter.post('/user/getUserbyUsername', userController.getUserbyUsername);
userRouter.post('/user/update', userController.update);
userRouter.post('/user/logout', userController.logout);

// Employee APIs
userRouter.post('/employee/CreateEmployee', employeeController.CreateEmployee);
userRouter.post('/employee/GetEmployeeById', employeeController.GetEmployeeById);
userRouter.post('/employee/UpdateEmployee', employeeController.UpdateEmployee);
userRouter.post('/employee/DeleteEmployeeById', employeeController.DeleteEmployeeById);

// Penduduk APIs
userRouter.post('/penduduk/CreatePenduduk', pendudukController.CreatePenduduk);
userRouter.post('/penduduk/GetPendudukById', pendudukController.GetPendudukById);
userRouter.post('/penduduk/UpdatePenduduk', pendudukController.UpdatePenduduk);
userRouter.post('/penduduk/DeletePendudukById', pendudukController.DeletePendudukById);

// Penduduk Meninggal APIs
userRouter.post('/pendudukmeninggal/CreatePendudukMeninggal', pendudukMeninggalController.CreatePendudukMeninggal);
userRouter.post('/pendudukmeninggal/GetPendudukMeninggalById', pendudukMeninggalController.GetPendudukMeninggalById);
userRouter.post('/pendudukmeninggal/UpdatePendudukMeninggal', pendudukMeninggalController.UpdatePendudukMeninggal);
userRouter.post('/pendudukmeninggal/DeletePendudukMeninggalById', pendudukMeninggalController.DeletePendudukMeninggalById);

// Penduduk Pindah APIs
userRouter.post('/pendudukpindah/CreatePendudukPindah', pendudukPindahController.CreatePendudukPindah);
userRouter.post('/pendudukpindah/GetPendudukPindahById', pendudukPindahController.GetPendudukPindahById);
userRouter.post('/pendudukpindah/UpdatePendudukPindah', pendudukPindahController.UpdatePendudukPindah);
userRouter.post('/pendudukpindah/DeletePendudukPindahById', pendudukPindahController.DeletePendudukPindahById);     

// Ref Master APIs
userRouter.post('/refmaster/CreateRefMaster', refMasterController.CreateRefMaster);
userRouter.post('/refmaster/GetRefMasterById', refMasterController.GetRefMasterById);
userRouter.post('/refmaster/GetRefMasterByMasterType', refMasterController.GetRefMasterByMasterType);
userRouter.post('/refmaster/UpdateRefMaster', refMasterController.UpdateRefMaster);
userRouter.post('/refmaster/DeleteRefMasterById', refMasterController.DeleteRefMasterById);

// Ref Menu APIs
userRouter.post('/refmenu/CreateRefMenu', refMenuController.CreateRefMenu);
userRouter.post('/refmenu/GetRefMenuById', refMenuController.GetRefMenuById);
userRouter.post('/refmenu/UpdateRefMenu', refMenuController.UpdateRefMenu);
userRouter.post('/refmenu/DeleteRefMenuById', refMenuController.DeleteRefMenuById);

// Ref Role APIs
userRouter.post('/refrole/CreateRefRole', refRoleController.CreateRefRole);
userRouter.post('/refrole/GetRefRoleById', refRoleController.GetRefRoleById);
userRouter.post('/refrole/UpdateRefRole', refRoleController.UpdateRefRole);
userRouter.post('/refrole/DeleteRefRoleById', refRoleController.DeleteRefRoleById);

export { userRouter };
