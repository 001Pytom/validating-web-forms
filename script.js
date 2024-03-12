"use strict";
const form = document.querySelector("form");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const telephone = document.getElementById("telephone");
const bio = document.getElementById("bio");
const btn = document.getElementById("submit_btn");

// function error
let errorDisplay = (errorClass, errorMsg) => {
  const error = document.querySelector(errorClass);
  error.textContent = errorMsg;
};

// function regEx name check
let regExCheckName = (inputString) => {
  const inputStringVal = inputString.value;
  const namePattern = /^[a-zA-Z0-9]{3,16}$/;
  return namePattern.test(inputStringVal);
};

// function regEx password check
let regExEmail = (email) => {
  const emailVal = email.value;
  const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(emailVal);
};

// function regEx password check
let regExTelephone = (telephone) => {
  const telephoneVal = telephone.value;
  const telephonePattern = /^\+?[0-9\s-]+$/;
  return telephonePattern.test(telephoneVal);
};

// function regEx password check
let regExPassword = (password) => {
  const passwordVal = password.value;
  const passwordPattern = /^[a-zA-Z0-9@_-]{6,20}$/;
  return passwordPattern.test(passwordVal);
};

// function regEx password check
let regExBio = (bio) => {
  const bioVal = bio.value;
  const bioPattern = /^[a-z_-]{8,50}$/;
  return bioPattern.test(bioVal);
};

//
firstName.addEventListener("keyup", () => {
  if (!regExCheckName(firstName)) {
    errorDisplay(
      ".firstname_error_message",
      "FIrst name must be alphanumeric and contains 3-16 characters"
    );
  } else {
    firstName.classList.add("correct");
    document.querySelector(".firstname_error_message").textContent = "";
  }
});

lastName.addEventListener("keyup", () => {
  if (!regExCheckName(lastName)) {
    errorDisplay(
      ".lastname_error_message",
      "last name must be alphanumeric and contains 3-16 characters"
    );
  } else {
    lastName.classList.add("correct");
    document.querySelector(".lastname_error_message").textContent = "";
  }
});

email.addEventListener("keyup", () => {
  if (!regExEmail(email)) {
    errorDisplay(
      ".email_error_message",
      "email must be valid address, e.g example@example.com"
    );
  } else {
    email.classList.add("correct");
    document.querySelector(".email_error_message").textContent = "";
  }
});

password.addEventListener("keyup", () => {
  if (!regExPassword(password)) {
    errorDisplay(
      ".password_error_message",
      "password must be alphanumeric and must be between 6-20 characters"
    );
  } else {
    password.classList.add("correct");
    document.querySelector(".password_error_message").textContent = "";
  }
});

telephone.addEventListener("keyup", () => {
  if (!regExTelephone(telephone)) {
    errorDisplay(".telephone", "Enter valid telephone number");
  } else {
    telephone.classList.add("correct");
    document.querySelector(".telephone").textContent = "";
  }
});

bio.addEventListener("keyup", () => {
  if (!regExBio(bio)) {
    errorDisplay(
      ".Yourbio_error_message",
      "Bio must contain only lower case letters, underscore , hyhens and must be 8-50 characters"
    );
  } else {
    bio.classList.add("correct");
    document.querySelector(".Yourbio_error_message").textContent = "";
  }
});

// Add an event listener to the form submission instead of the button click
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let check =
    regExBio(bio) &&
    regExCheckName(firstName) &&
    regExCheckName(lastName) &&
    regExEmail(email) &&
    regExPassword(password) &&
    regExTelephone(telephone);

  if (check) {
    btn.classList.add("sucessbtn");
    form.submit();
  }
});
