//Set dependencies & variables
const express = require("express");
const PORT = process.env.PORT || 3000;
const exphbs = require("express-handlebars");
//Start Express Server
const app = express();

// Middleware
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//Template view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgersController.js");
app.use(routes);

//Listener
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});