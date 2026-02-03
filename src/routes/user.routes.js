import express from "express";
import { searchUserByName } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/search", searchUserByName);//search users by name

export default router;
