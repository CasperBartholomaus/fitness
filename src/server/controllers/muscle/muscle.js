//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PACKAGE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const { Database } = require("./../../db/Database");
const db = Database.initDatabase();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MUSCLE CONTROLLER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const findAll = function (req, response){
    try {
        db.query('SELECT * FROM workout.muscle', (err, res) => {
            if (err) {
                console.log(err)
            } else {
                response.send(res.rows);
            }
        })
    } catch (err) {
        console.log(err);
    }
};

const findByName = function (req, response){
        const name = req.body.name;

        try {
            db.query(`SELECT * FROM workout.muscle WHERE name LIKE '%${name}%'`, (err, res) => {
                if (err) {
                    console.log(err)
                } else {
                    response.send(res.rows);
                }
            })
        } catch(err){
            console.log(err);
        }
};


module.exports = {
    findAll,
    findByName,
};