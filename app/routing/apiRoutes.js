//dependencies
const path = require("path");

//routing

module.exports = function(app) {
  app.post("/api/survey", function(req, res) {
    //TODO add validation here
    console.log(req)
  })
};