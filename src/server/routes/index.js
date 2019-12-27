module.exports = function (app) {
    app.use("/api", require("./workout"));
};