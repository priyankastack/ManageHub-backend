import jwt from "jsonwebtoken";
import Employee from "../models/model.js";
const loginvalidate = async (req, res, next) => {
//verifying jwt using middleware.
  const token = req.header("Authorization");
  if (!token) {
    return res.status(500).json({
      message: "Unauthorized HTTP,Token not provided.",
    });
  }
  const jwtToken = token.replace("Bearer", "").trim();
  try {
    const isVerified = jwt.verify(jwtToken, process.env.SECRET_KEY);
    console.log(isVerified);
    const userData = await Employee.findOne({ email: isVerified.email });
    req.token = token;
    req.user = userData;
    req.userID = userData._id;
    next();                       // Move on to the next middleware or route handler
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export default loginvalidate;
