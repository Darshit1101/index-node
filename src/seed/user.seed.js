import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import User from "../models/user.model.js";
import { APP_DB_URI } from "../configs/environment.js";

const TOTAL_USERS = 10000;

const connectDB = async () => {
  await mongoose.connect(APP_DB_URI, {
    autoIndex: false,
  });
  console.log("MongoDB connected for seeding");
};

const generateUsers = () => {
  const users = [];

  for (let i = 0; i < TOTAL_USERS; i++) {
    users.push({
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      phone: faker.phone.number("9#########"),
    });
  }

  return users;
};

const seedUsers = async () => {
  try {
    await connectDB();

    // optional: clean old data
    await User.deleteMany();
    console.log("Old users removed");

    const users = generateUsers();
    await User.insertMany(users);

    console.log(`✅ ${TOTAL_USERS} users inserted successfully`);
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
};

seedUsers();
