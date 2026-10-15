const express = require("express");
const Providerrouter = express.Router();


const {
       AddProvider,
       GetOneProvider,
       GetAllProvider,
       UpdateProvider,
       DeleteProvider

}=require("../controllers/ProviderControllers")

Providerrouter.post("/signin", AddProvider);
Providerrouter.get("/getProvider", GetOneProvider);
Providerrouter.get("/getallprovider", GetAllProvider);
Providerrouter.put("/updateProvider", UpdateProvider);
Providerrouter.delete("/deleteProvider", DeleteProvider);

module.exports = Providerrouter