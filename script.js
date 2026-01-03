// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function () {
  // Select the button by its ID
  const button = document.getElementById("alertButton");

  // Add a click event listener
  button.addEventListener("click", function () {
    alert("Hello! You clicked the button.");
  });
});
