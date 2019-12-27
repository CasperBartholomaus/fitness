//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ PACKAGE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const { Database } = require("./../../db/Database");
const db = Database.initDatabase();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MUSCLE CONTROLLER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const findAll = function (req, response){
    try {
        db.query('SELECT * FROM workout.workout_options', (err, res) => {
            if (err) {
                console.log(err)
            } else {
                response.send(res.rows);
            }
        });
    } catch (err) {
        console.log(err);
    }
};

const findExercises = function(req, response) {
    const focus = req.body.focus;
    const muscle = req.body.muscle;
    console.log(focus);
    try {
       db.query(`SELECT M.name as muscle, E.name as exercise, F.name as focus, SR.sets, SR.reps FROM workout.workout_options as WO  
           join workout.muscle as M on WO.muscle_id = M.id
           join workout.exercise as E on WO.exercise_id = E.id
           join workout.focus as F on WO.focus_id = F.id
           join workout.sets_reps as SR on WO.sets_reps_id = SR.id
           WHERE F.name = '${focus}' and M.name = '${muscle}'`, (err, res) => {
           if(err) {
               console.log(err);
           } else {
               console.log("Successfully GET Request: findExercise");
               response.send(res.rows);
           }
       });
    } catch(err) {
        console.log(err);
    }
};

const insertOption = function(req, response){
    const { muscle_id, exercise_id, focus_id } = req.body;

    try {
        db.query(`INSERT INTO workout.workout_options(exercise_id, muscle_id, focus_id) VALUES (${exercise_id}, ${muscle_id}, ${focus_id})`, (err, res) => {
            if (err) {
                console.log(err)
            } else {
                response.send("Success");
            }
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    findAll,
    insertOption,
    findExercises
};