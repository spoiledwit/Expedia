import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

// Register
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user exists
    const oldUser = await UserModel.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User already exists");
    }

    // Encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await UserModel.create({
      name,
      email,
      hashedPassword: encryptedPassword,
    });

    // Create token
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "12h" }
    );

    res.status(201).json({ user, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    // Check if the user exists
    const user = await UserModel.findOne({ email });

    console.log(user);

    if (!user) {
      return res.status(404).send("User doesn't exist");
    }

    // Validate password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.hashedPassword
    );

    if (!isPasswordCorrect) {
      return res.status(400).send("Invalid credentials");
    }

    // Create token
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "12h" }
    );

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUsersCount = async (req, res) => {
  const users = await UserModel.countDocuments({}, (err, count) => {
    if (err) {
      res.status(404).json({ success: false, message: error.message });
    }
    res.status(200).json({ success: true, count: users.length });
  });
};

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await UserModel.findByIdAndRemove(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
