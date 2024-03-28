document.getElementById("my-btn").addEventListener("click", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the email input element and its value
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value;
  const messageElement = emailInput.nextElementSibling;

  // Check if the input is empty
  if (!emailValue) {
    messageElement.textContent = "Email is required.";
    emailInput.style.borderColor = "red";
    messageElement.style.display = "block";
    return;
  }

  // Validate the email format
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(emailValue)) {
    messageElement.textContent = "Please enter a valid email address.";
    emailInput.style.borderColor = "yellow";
    messageElement.style.display = "block";
  } else {
    messageElement.textContent = "";
    emailInput.style.borderColor = "blue";
    messageElement.style.display = "none";
  }
});
