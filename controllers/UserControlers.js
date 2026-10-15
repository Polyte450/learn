const db = require("../db/connection")
// register user
async function AddUser(req, res) {
    try {
        const name = req.body.name;
        const user = req.body.username;
        const email = req.body.email;
        const pass = req.body.password;

        await db.query("insert into users values(?,?,?,?,?)", ['', name, user, email, pass],
            (err) => {
                if (err) throw err
                return res.status(201).json({ "message": "User is created sucessfully" })

            })
    } catch (err) {
        return res.status(505).json({ "message": "internal server error" })
    }
}

//getting one user
async function GetOneUser(req, res) {

    try {
        const UserId = req.params.id;

        await db.query("SELECT * from users where id=?", [UserId],
            (err, result) => {
                if (err) throw err
                return res.status(500).json({ "message": "User retrived sucessfully", "data": results })
            }
        )

    } catch (error) {
        return res.status(500).json({ "message": "internal server error" })
    }
}

// getting all users
async function GetAllUser(req, res) {

    try {

        await db.query("SELECT * from user ",
            (err, result) => {
            if(err) throw err
                return res.status(500).json({ "message": "Users retrived sucessfully", "data": results })
        }
        )

    } catch (error) {
        return res.status(500).json({ "message": "internal server error" })
    }
}
//update user

async function UpdateUser(req, res) {
    try {
        const name = req.body.name;
        const user = req.body.username;
        const email = req.body.email;
        const pass = req.body.password;
        const UserId = req.params.id;

        await db.query("Update user set name=?, username=?, email=?, password=? WHERE UserId=?", [name, user, email, pass,UserId],
            (err) => {
                if (err) throw err
                return res.status(201).json({ "message": "User is updated sucessfully" })

            })
    } catch (err) {
        return res.status(505).json({ "message": "internal server error" })
    }
}
// delete user

async function DeleteUser(req, res) {

    try {
        const UserId = req.params.id;

        await db.query("DELETE from user where id=?", [UserId],
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
    AddUser,
    GetOneUser,
    GetAllUser,
    UpdateUser,
    DeleteUser
}