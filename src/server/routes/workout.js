const workoutRouter = require("express").Router();
const muscleController = require("./../controllers/muscle/muscle");
const exerciseController = require("./../controllers/exercise/exercise");
const workoutController = require("./../controllers/workout/workout");

workoutRouter.get("/muscle/find", muscleController.findAll);
workoutRouter.post("/muscle/findbyname", muscleController.findByName);
workoutRouter.get("/exercise/find", exerciseController.findAll);
workoutRouter.post("/exercise/findbyname", exerciseController.findByName);
workoutRouter.post("/workout/insertoption", workoutController.insertOption);
workoutRouter.post("/workout/findstrengthexercise", workoutController.findExercises);

module.exports = workoutRouter;