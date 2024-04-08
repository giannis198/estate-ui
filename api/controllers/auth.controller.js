import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import db from "../lib/db.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create user", error });
  }
};

export const login = async (req, res) => {
  // db operations
  const { username, password } = req.body;

  try {
    const user = await db.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) return res.status(401).json({ message: "Invalid Credentials" });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid Credentials" });
    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: age,
      })
      .status(200)
      .json(userInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error", error });
  }
};

export const logout = (req, res) => {
  // db operations
  res
    .clearCookie("token")
    .status(200)
    .json({ message: "User logout Successfully!" });
};
