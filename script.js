const form = document.getElementById("signup-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const firstNameError = document.getElementById("firstname-error");
const lastNameError = document.getElementById("lastname-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

const errorIcon = document.getElementById("error-icon");

form.addEventListener("submit", function (event) {
  let isValid = true;

  if (firstName.value.trim() === "") {
    firstNameError.style.display = "block";
    firstNameError.textContent = "First Name cannot be empty";
    firstName.classList.add("error");
    isValid = false;
  } else {
    firstNameError.style.display = "none";
    firstName.classList.remove("error");
  }

  if (lastName.value.trim() === "") {
    lastNameError.style.display = "block";
    lastNameError.textContent = "Last Name cannot be empty";
    lastName.classList.add("error");
    isValid = false;
  } else {
    lastNameError.style.display = "none";
    lastName.classList.remove("error");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    emailError.style.display = "block";
    emailError.textContent = "Looks like this is not an email";
    email.classList.add("error");
    isValid = false;
  } else {
    emailError.style.display = "none";
    email.classList.remove("error");
  }

  if (password.value.trim() === "") {
    passwordError.style.display = "block";
    passwordError.textContent = "Password cannot be empty";
    password.classList.add("error");
    isValid = false;
  } else {
    passwordError.style.display = "none";
    password.classList.remove("error");
  }

  if (!isValid) {
    event.preventDefault();
  }
});
