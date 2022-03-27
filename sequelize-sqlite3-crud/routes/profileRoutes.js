// router class ı temsil etmektedir
const express = require("express");
const {
  getAllProfiles,
  getProfile,
  saveProfile,
  deleteProfile,
  updateProfile
} = require("../controller/profileController");

const router = express.Router();

// http://localhost:3005/api/profiller
router.get("/profiller", getAllProfiles);

// http://localhost:3005/api/profil/id
router.get("/profil/:id", getProfile);

// http://localhost:3005/api/profil
/*
{
    "name": "{{$randomFullName}}",
    "email": "{{$randomEmail}}",
    "phone": "{{$randomPhoneNumber}}"
}
*/
router.post("/profil", saveProfile);

// http://localhost:3005/api/profil/id
/*
{
    "name": "{{$randomFullName}}",
    "email": "{{$randomEmail}}",
    "phone": "{{$randomPhoneNumber}}"
}
*/
router.put("/profil/:id", updateProfile);

// http://localhost:3005/api/profil/id
router.delete("/profil/:id", deleteProfile);

module.exports = {
  routes: router
};
