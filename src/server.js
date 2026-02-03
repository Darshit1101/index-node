import express from "express";
import { PORT } from "./configs/environment.js";
import userRoutes from "./routes/user.routes.js";
import connectDB from "./configs/db.js";

// connect to database
connectDB();

const app = express();
app.use(express.json());

// routes
app.use("/api/users", userRoutes);

// server start
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
