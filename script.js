const loginBtn = document.getElementById("loginBtn");
const loginDropdown = document.getElementById("loginDropdown");
const signupBtn = document.getElementById("signupBtn");

// Toggle dropdown display when button is clicked
loginBtn.addEventListener("click", function(event) {
  event.stopPropagation(); // Prevent click event from propagating to parent elements
  loginDropdown.style.display = loginDropdown.style.display === "block" ? "none" : "block";
});

// Keep dropdown open when clicked inside
loginDropdown.addEventListener("click", function(event) {
  event.stopPropagation(); // Prevent click event from propagating to parent elements
});

// Close dropdown when clicked outside
document.addEventListener("click", function() {
  loginDropdown.style.display = "none";
});

// Adjust card group position when dropdown appears
loginDropdown.addEventListener("transitionend", function() {
  if (loginDropdown.style.display === "block") {
    cardGroup.style.transform = "translateY(" + loginDropdown.clientHeight + "px)";
  } else {
    cardGroup.style.transform = "translateY(0)";
  }
});

// Open a new blank webpage when sign up button is clicked
signupBtn.addEventListener("click", function() {
  window.open("", "_blank");
});
