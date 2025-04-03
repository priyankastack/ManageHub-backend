const adminValidate = async (req, res, next) => {
  try {
    // Ensure req.user exists before checking isAdmin
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    const isAdmin = req.user.isAdmin;

    if (!isAdmin) {
      return res.status(403).json({
        message: "Access denied. User is not an admin",
        success: false,
      });
    }

    next(); // Proceed if user is an admin
  } catch (error) {
    console.error("Admin validation error:", error);
    res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
  }
};

export default adminValidate;


