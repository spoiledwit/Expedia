import dotenv from "dotenv";
import verifyToken from "./verifyToken.js";
dotenv.config();

const verifyAdmin = async (req, res, next) => {
  try {
    verifyToken(req, res, next);
    if (!req.userRole === "admin") {
      throw new Error("Unauthorized");
    }
  } catch (error) {
    res.status(403).json({ message: error.message || "Unauthorized" });
  }
};

export default verifyAdmin;
