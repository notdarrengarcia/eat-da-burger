// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-burger").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var burgers = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax("/api/cats/" + id, {
      type: "PUT",
      data: newSleepState
    }).then(
      function() {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list (possibly move it outside)
        location.reload();
      }
    );
  });


  // change it handlebars as well
  $("#submit").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = $("#ca").val().trim();

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: {burger_name: newBurger}
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".delete-cat").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/cats/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted cat", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});