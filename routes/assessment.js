import {
  getAssessments,
  createAssessment,
  deleteAssessment,
} from "../controllers/assessment.js";
import express from "express";
import verifyAdmin from "../middleware/verifyAdmin.js";

const router = express.Router();

router.get("/", verifyAdmin, getAssessments);
router.post("/", createAssessment);
router.delete("/:id", verifyAdmin, deleteAssessment);

export default router;
