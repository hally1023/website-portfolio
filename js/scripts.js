// B2B Marketing Plan - Temporary Password
document.addEventListener("DOMContentLoaded", function () {
    const b2bLink = document.getElementById("b2bMarketingPlan");
  
    b2bLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevents the link from opening immediately
  
      const correctPassword = "carrot1023"; // Temporary Password
      const userInput = prompt("Enter password to access the document:");
  
      if (userInput === correctPassword) {
        window.open(
          "https://docs.google.com/document/d/1j5_nF6fEgoZD1iGiLp6G2sXav_X5mXER/preview",
          "_blank"
        );
      } else {
        alert("Incorrect password. Access denied.");
      }
    });
  });
  