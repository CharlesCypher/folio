const hamburger = document.querySelector(".header__hamburger");
const sideBar = document.querySelector(".header__sideBar");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  sideBar.classList.toggle("is-sliding");
});

const toTop = document.getElementById("toTop");
toTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// let number = document.getElementById("number1");
// let counter = 0;
// setInterval(() => {
//   if (counter == 65) {
//     clearInterval();
//   } else {
//     counter += 1;
//     number.innerHTML = counter + "%";
//   }
// }, 30);

// let number1 = document.getElementById("number2");
// let counter1 = 0;
// setInterval(() => {
//   if (counter1 == 57) {
//     clearInterval();
//   } else {
//     counter1 += 1;
//     number1.innerHTML = counter1 + "%";
//   }
// }, 35);

// let number2 = document.getElementById("number3");
// let counter2 = 0;
// setInterval(() => {
//   if (counter2 == 30) {
//     clearInterval();
//   } else {
//     counter2 += 1;
//     number2.innerHTML = counter2 + "%";
//   }
// }, 65);
