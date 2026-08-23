const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

console.log(
  "JWT_SECRET loaded:",
  !!process.env.JWT_SECRET
);

// Existing Auth Routes
const authRoutes = require("./routes/authRoutes");

// New Contact Routes
const contactRoutes = require("./routes/contactRoutes");

const app = express();