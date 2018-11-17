//dependencies
const path = require("path");
const friends = require("../data/friends.js");

//routing

module.exports = function(app) {
  app.post("/api/survey", function(req, res) {

    //retrieve data array from request
    console.log(req.body.data);
    const data = req.body.data;

    //compare new data to friends array to find similarities
    friends.forEach(person =>{
      console.log(person)
      //TODO map to array difference function and return index of highest match
    });
    //push new person to friends array
    friends.push(data);
    res.redirect("/");
    //TODO trigger model with best match
  })
};