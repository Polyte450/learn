const express = require('express');
const db = require('./db/connection');
const Router = require ('./routes/authRoutes');
const Providerrouter = require ('./routes/ProviderRoutes');
const PORT = 7000;
const app = express();
app.use(express.json());
app.use(Router);
app.use(Providerrouter);
app.get("/", (req, res) => {
    res.send("Welcome to my application");
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`server running on http://localhost:${PORT}`); 
});
