import User from "../models/user.model.js";

export const searchUserByName = async (req, res, next) => {
  try {
    const { name } = req.query;

    const start = Date.now();

    const users = await User.find({
      name: new RegExp(name, "i"), // case-insensitive search
    });

    const end = Date.now();

    res.status(200).json({
      success: true,
      data: users,
      timeTakenMs: end - start,
    });
  } catch (error) {
    next(error);
  }
};
