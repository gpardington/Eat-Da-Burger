// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-crushed").on("click", function(event) {
      var id = $(this).data("id");
      var newCrushed = $(this).data("newcrushed");
      //Flip crushed boolean
      var newCrushed = !newCrushed;
      //Add new state to object
      var newCrushedState = {
        crushed: newCrushed
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newCrushedState
      }).then(
        function() {
          console.log("changed crushed to", newCrushed);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger").val().trim(),
        crushed: 0
      };
      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  