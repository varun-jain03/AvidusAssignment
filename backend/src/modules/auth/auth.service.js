// Dependencies
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// File Impory
const { createUser, findUserByEmail, findUserById, getAllUsers, deleteUserById, updateUserStatus } = require("../users/user.repository.js");
const ApiError = require("../../utils/ApiError.js");

// Registering A New User 
const registerUser = async (userData) => {
  const existingUser = await findUserByEmail(userData.email);
  if (existingUser) {
    throw new ApiError(409, "User Already Existing...")
  };

  const hashedPassword = await bcrypt.hash(
    userData.password,
    Number(process.env.SALT_ROUNDS)
  );

  const user = await createUser({
    ...userData,
    password: hashedPassword
  });

  return user;
};

// Logging in a Existing User
const loginUser = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new ApiError(401, "Invalid Credentials...");
  };

  if (user.status === "Inactive") {
    throw new ApiError(403, "Account Has Been Deactivated...");
  };

  const isPassCorrect = await bcrypt.compare(password, user.password);
  if (!isPassCorrect) {
    throw new ApiError(401, "Incorrect Password...");
  };

  const payload = {
    userId: user._id,
    role: user.role
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
  
  return {
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    }
  };
};


module.exports = { registerUser, loginUser };