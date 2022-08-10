const getAllApplication = "SELECT * FROM application";
const getApplicationById = "SELECT * FROM application WHERE application_id = $1";
const checkNameApplication = "SELECT app FROM application app WHERE app.name = $1";
const addApplication = "INSERT INTO application(name, description, image, status, apikey, apisecret) VALUES ($1, $2, $3, $4, $5, $6)";
const removeApplication = "DELETE FROM application WHERE application_id = $1";
const updateApplication = "UPDATE application SET status = $1 WHERE application_id = $2";

module.exports = {getAllApplication, getApplicationById, checkNameApplication, addApplication, removeApplication, updateApplication};