"use strict";

// let secretNumber;
let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);
let guess = document.querySelector("#guess");

let checkbtn = document.querySelector("#check");
let resetbtn = document.querySelector("#reset");

let comments = function (msg) {
  document.querySelector("#comment").textContent = msg;
};

checkbtn.addEventListener("click", () => {
  if (!guess.value) {
    comments("⛔ Plz Enter Number ⛔");
  } else {
    if (guess.value == secretNumber) {
      comments("Congrats🎉💥 Winner!");
      document.querySelector(".result-text").textContent = secretNumber;
      document.querySelector(".result").style.backgroundColor = "#158fba";
      document.querySelector(".result").style.width = "350px";
    } else if (guess.value > secretNumber) {
      comments("Too Big Number 📈");
    } else {
      comments("Too Small Number 📉");
    }
  }
});

resetbtn.addEventListener("click", () => {
  document.querySelector(".result-text").textContent = "?";
  guess.value = "";
  secretNumber = Math.floor(Math.random() * 20) + 1;
  //   console.log(secretNumber);
  comments("Enter Your Number 😍");
  document.querySelector(".result").style.backgroundColor = "white";
  document.querySelector(".result").style.width = "250px";
});
