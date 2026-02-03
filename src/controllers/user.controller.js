import User from "../models/user.model.js";

export const searchUserByName = async (req, res, next) => {
  try {
    const { name } = req.query;

    const start = Date.now();

    const users = await User.find({ name }); // ✅ exact match

    const end = Date.now();

    res.status(200).json({
      count: users.length,
      timeTakenMs: end - start,
      data: users
    });
  } catch (error) {
    next(error);
  }
};
