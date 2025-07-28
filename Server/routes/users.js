//Imports
const express = require("express");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const cors = require("cors");
const { prototype } = require("pg/lib/type-overrides");
dotenv.config();

const userRoutes = express();
const serverPort = process.env.SERVER_PORT;

// Middleware
userRoutes.use(express.json()); // To parse JSON request bodies
userRoutes.use(cors()); // Enable CORS for all origins (for development)

const myPool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});

//Database Connection
myPool.connect((err) => {
  if (err) {
    console.error("Check you database Big Man", err);
  } else {
    console.log("Tuko ndani, Database it OOONN!!!");
  }
});

//Endpoints for user routes
//get all users
userRoutes.get("/", (res, req) => {
  res.send("Users route is working");
});
//get user by ID

userRoutes.get("/:id", async (res, req) => {
  res.send("User is working");
});

//Create a new user

userRoutes.post("/register", (res, req) => {
  res.send("Users REG is working");
});

module.exports = userRoutes;
