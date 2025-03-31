// B2B Marketing Plan - Temporary Password
document.addEventListener("DOMContentLoaded", function () {
    const b2bLink = document.getElementById("b2bMarketingPlan");
  
    b2bLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevents the link from opening immediately
  
      const correctPassword = "carrot10"; // Temporary Password
      const userInput = prompt("Enter password to access the document:");
  
      if (userInput === correctPassword) {
        window.open(
          "https://drive.google.com/file/d/1a5bulYRmjQn6OkVjM30piV37oWa_jhC2/view",
          "_blank"
        );
      } else {
        alert("Incorrect password. Access denied.");
      }
    });
  });
  