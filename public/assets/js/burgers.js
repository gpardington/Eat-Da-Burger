// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-crushed").on("click", function(event) {
      var id = $(this).data("id");
      var newCrushed = $(this).data("newcrushed");
  
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
        crushed: $("[name=crushed]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  