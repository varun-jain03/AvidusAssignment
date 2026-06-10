// File Import
const { getAllUsers } = require("./user.repository.js");


// Get All The Users 
const getAllTheUsers = async () => {
  return await getAllUsers();
};

module.exports = { getAllTheUsers };