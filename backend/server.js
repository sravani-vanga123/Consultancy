const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Existing Auth Routes
const authRoutes = require("./routes/authRoutes");

// New Contact Routes
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Signup and Login APIs
app.use("/api/auth", authRoutes);

// Contact Form API
app.use("/api/contact", contactRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Moin Consultancy Backend is Running");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Atlas Connected Successfully");

    app.listen(process.env.PORT || 5000, () => {
      console.log(
        `Server running on port ${process.env.PORT || 5000}`
      );
    });
  })
  .catch((error) => {
    console.log(
      "MongoDB Connection Error:",
      error.message
    );
  });