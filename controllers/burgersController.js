var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
//Get burger
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//Post new burger to list
router.post("/api/burgers", function(req, res) {
  burger.create(["burger_name", "crushed"], [req.body.burger_name, req.body.crushed], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
// Put new burger
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      crushed: req.body.crushed
    },
    condition,
    function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
      res.status(200).end();
     }
  });
});

// Export routes for server.js to use.
module.exports = router;