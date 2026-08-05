const Contact = require(
  "../models/Contact"
);

// Create contact message
const createContact = async (
  req,
  res
) => {
  try {
    const {
      fullName,
      email,
      mobile,
      message,
    } = req.body;

    // Validation
    if (
      !fullName ||
      !email ||
      !mobile ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save data to MongoDB
    const contact = await Contact.create({
      fullName,
      email,
      mobile,
      message,
    });

    return res.status(201).json({
      success: true,
      message:
        "Your message has been sent successfully!",
      data: contact,
    });
  } catch (error) {
    console.error(
      "Create Contact Error:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message:
        "Internal server error",
    });
  }
};

module.exports = {
  createContact,
};