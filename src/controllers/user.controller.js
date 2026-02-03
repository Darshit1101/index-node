import User from "../models/user.model.js";

export const searchUserByName = async (req, res, next) => {
  try {
    const { name } = req.query;

    const users = await User.find({
      name: new RegExp(name, "i"), // case-insensitive search
    });

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};
