import { Router } from "express";
import {
  getDoctorInfoController, updateProfileController, getDoctorByIdController, doctorAppointmentsController, updateStatusController,
} from "../controllers/doctorCtrl";

import authMiddleware from "../middlewares/authMiddleware";
const router = Router();

//POST SINGLE DOC INFO
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST  GET SINGLE DOC INFO
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

//GET Appointments
router.get(
  "/doctor-appointments",
  authMiddleware,
  doctorAppointmentsController
);

//POST Update Status
router.post("/update-status", authMiddleware, updateStatusController);

export default router;
