import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Add user
export const createUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPass;
  const newUser = new User(req.body);
  const { username } = req.body;
  try {
    const userExists = await User.findOne({ username: username });
    if (userExists) {
      res.status(400).json({ message: "username is already taken" });
    }

    const user = await newUser.save();
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ token, user });
  } catch (error) {
    console.log({ message: error.message });
  }
};

// Login user
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);
      if (validity) {
        const { password, ...otherDetails } = user._doc;
        const token = jwt.sign(
          {
            id: user._id,
            username: user.username,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({ token, otherDetails });
      } else {
        res.status(401).json("Invalid username or password");
      }
    } else {
      res.status(404).json({ message: "User does not exist" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;

  if (id === currentUserId || currentUserAdminStatus) {
    try {
      const user = await User.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

// Logout user
export const logoutUser = async (req, res) => {
  try {
    await User.remove();
  } catch (error) {
    res.status(500).json(error.message);
  }
};
