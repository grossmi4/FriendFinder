//dependencies
const path = require("path");
const friends = require("../data/friends.js");

//routing

module.exports = function(app) {
  app.post("/api/survey", function(req, res) {

    //retrieve data array from request
    console.log(req.body.data);
    const data = req.body.data;
    const newPersonAttr = data.slice(2);

    //declare empty array that will hold match information
    let matchArray = [];

    //compare new data to friends array to find similarities
    friends.forEach(person =>{
      //use arrayNumMatch to find match level between friend and survey submission
      const matchValue = arrayNumMatch(person.slice(2),newPersonAttr);
      matchArray.push(matchValue); //push only matchValue into matchArray to be used to calculate max
    });

    //find best match from friends using min value from matchArray and the first friend with it
    const bestMatchVal = Math.min(matchArray);
    console.log(`closest friend match scored a difference value of ${bestMatchVal}`);

    //find the first friend with a match value of the min
    const bestMatch = friends[matchArray.indexOf(bestMatchVal)];

    //push new person to friends array
    friends.push(data);

    res.json(bestMatch)
    //TODO trigger model with best match
  })
};

//arrayNumMatch compares two equal length numeric arrays and outputs the sum of the difference between elements
const arrayNumMatch = function(array1, array2) {
  //declare variable that will eventually be returned
  let delta = 0;

  //check if arrays are the same length, if not returns undefined
  if (array1.length !== array2.length) {
    return undefined;
  }
  //cycle through each matching elements of the two arrays
  for (let i = 0; i < array1.length; i++) {
    delta += Math.abs(array2[i] - array1[i]) //abs is used to determine absolute difference between arrays
  }
  //return delta as the result of comparing arrays
  return delta;
};

