//dependencies
const path = require("path");

//routing

module.exports = function(app) {
  app.post("/api/survey", function(req, res) {
    console.log(req.body.data);
    /*TODO add validation here*/})
};