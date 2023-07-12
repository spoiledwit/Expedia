import {
  getContacts,
  createContact,
  deleteContact,
} from "../controllers/contact.js";
import express from "express";
import verifyAdmin from "../middleware/verifyAdmin.js";

const router = express.Router();

router.get("/", verifyAdmin, getContacts);
router.post("/", createContact);
router.delete("/:id", verifyAdmin, deleteContact);

export default router;
