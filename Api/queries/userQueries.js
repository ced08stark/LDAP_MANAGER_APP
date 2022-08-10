const getAllUsers = "SELECT * FROM _user";
const getUserById = "SELECT * FROM _user WHERE user_id = $1";
const checkUsernameExists = "SELECT s FROM _user s WHERE s.username = $1";
const addUser = "INSERT INTO _user (username, password, picture, createdAt, application_id) VALUES ($1, $2, $3, $4, $5)";
const removeUser = "DELETE FROM _user WHERE user_id = $1";
const updateUser = "UPDATE _user SET username = $1 WHERE user_id = $2";

module.exports = {getAllUsers, getUserById, checkUsernameExists, addUser, removeUser, updateUser};