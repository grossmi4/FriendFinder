//Adding dependencies
const express = require("express");

//Configuring Express
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); //using express JSON data handling

//Setting routes from route files - passing express object in
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Adding listener for server
app.listen(PORT, function() {
  console.log(`Server listening on port: ${PORT}`)
});