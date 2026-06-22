const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

const form = document.querySelector(".form-container");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInputs();
});
function checkInputs() {
  if (firstName.value.trim() === "") {
    setErrorFor(firstName, "First name cannot be empty");
  } else {
    setSuccessFor(firstName);
  }

  if (email.value.trim() === "") {
    setErrorFor(email, "Email cannot be empty");
  } else if (!isEmail(email.value.trim())) {
    setErrorFor(email, "Looks like this is not an email");
  } else {
    setSuccessFor(email);
  }

  if (password.value.trim() === "") {
    setErrorFor(password, "Password cannot be empty");
  } else {
    setSuccessFor(password);
  }
  if (lastName.value.trim() === "") {
    setErrorFor(lastName, "Last name cannot be empty");
  } else {
    setSuccessFor(lastName);
  }
}
function setErrorFor(input, message) {
  const inputGroup = input.parentElement;
  if (message) {
    const errorText = inputGroup.querySelector(".error-text");
    errorText.innerText = message;
  }
  inputGroup.classList.add("error");
}
function setSuccessFor(input) {
  const inputGroup = input.parentElement;
  inputGroup.classList.remove("error");
}
function isEmail(emailStr) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailStr);
}
