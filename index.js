"use strict";

const btnCreate = document.getElementById("generate");
const password = document.getElementById("generated");
const reset = document.getElementById("init");

let charset = Math.floor(Math.random() * 90000) + 10000;
// Adding the click operation
const makeMove = btnCreate.addEventListener("click", function () {
  // Creating the generative
  charset = Math.floor(Math.random() * 90000) + 10000;
  //    Display Password
  password.textContent = charset;
  reset.classList.remove("hidden");
});

// Creating the reset button
let restartEngine = reset.addEventListener("click", function () {
  reset.classList.add("hidden");
  password.textContent = 'Password';
});
// console.log(restartEngine);