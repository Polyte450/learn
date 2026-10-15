const express = require("express");
const router = express.Router();

const {
    AddUser,
    GetOneUser,
    GetAllUser,
    UpdateUser,
    DeleteUser

} = require("../controllers/UserControlers")

router.post("/register", AddUser);
router.get("/getuser", GetOneUser);
router.get("/getallusers", GetAllUser);
router.put("/updateuser", UpdateUser);
router.delete("/deleteuser", DeleteUser);

module.exports = router