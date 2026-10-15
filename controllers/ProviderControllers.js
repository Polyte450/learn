const db = require("../db/connection")
// register provider
async function AddProvider(req, res) {
    try {
        const name = req.body.name;
        const user = req.body.username;
        const email = req.body.email;
        const pass = req.body.password;

        await db.query("insert into provider values(?,?,?,?,?)", ['', name, user, email, pass],
            (err) => {
                if (err) throw err
                return res.status(201).json({ "message": "Provider is created sucessfully" })

            })
    } catch (err) {
        return res.status(505).json({ "message": "internal server error" })
    }
}

//getting one provider
async function GetOneProvider(req, res) {

    try {
        const ProviderId = req.params.id;

        await db.query("SELECT * from provider where id=?", [ProviderId],
            (err, result) => {
                if (err) throw err
                return res.status(500).json({ "message": "Provider retrived sucessfully", "data": results })
            }
        )

    } catch (error) {
        return res.status(500).json({ "message": "internal server error" })
    }
}

// getting all providers
async function GetAllProvider(req, res) {

    try {

        await db.query("SELECT * from provider ",
            (err, result) => {
            if(err) throw err
                return res.status(500).json({ "message": "Providers retrived sucessfully", "data": results })
        }
        )

    } catch (error) {
        return res.status(500).json({ "message": "internal server error" })
    }
}
//update provider

async function UpdateProvider(req, res) {
    try {
        const name = req.body.name;
        const user = req.body.username;
        const email = req.body.email;
        const pass = req.body.password;
        const UserId = req.params.id;

        await db.query("Update provider set name=?, username=?, email=?, password=? WHERE UserId=?", [name, user, email, pass,UserId],
            (err) => {
                if (err) throw err
                return res.status(201).json({ "message": "Provider is updated sucessfully" })

            })
    } catch (err) {
        return res.status(505).json({ "message": "internal server error" })
    }
}
// delete provider

async function DeleteProvider(req, res) {

    try {
        const ProviderId = req.params.id;

        await db.query("DELETE from provider where id=?", [ProviderId],
            (err, result) => {
                if (err) throw err
                return res.status(500).json({ "message": "User delete sucessfully", "data": results })
            }
        )

    } catch (error) {
        return res.status(500).json({ "message": "internal server error" })
    }
}
module.exports={
    AddProvider,
    GetOneProvider,
    GetAllProvider,
    UpdateProvider,
    DeleteProvider
}