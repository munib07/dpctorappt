import { Router } from "express";
import { getAllUsersController, getAllDoctorsController, changeAccountStatusController } from "../controllers/adminCtrl";

import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

//GET METHOD || USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET METHOD || DOCTORS
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//POST ACCOUNT STATUS
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

export default router;
