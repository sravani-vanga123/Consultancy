const express = require("express");

const {
  createContact,
} = require(
  "../controllers/contactController"
);

const router = express.Router();

// POST API
router.post(
  "/",
  createContact
);

module.exports = router;