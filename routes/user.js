import express from "express";
import {
  login,
  register,
  getUser,
  getUsers,
  getUsersCount,
  deleteUser,
} from "../controllers/user.js";
import verifyAdmin from "../middleware/verifyAdmin.js";

const Router = express.Router();

Router.post("/login", login);
Router.post("/register", verifyAdmin, register);
Router.get("/", verifyAdmin, getUser);
Router.get("/count/all", verifyAdmin, getUsersCount);
Router.get("/all", verifyAdmin, getUsers);
Router.delete("/:id", verifyAdmin, deleteUser);

export default Router;
