// const tCloses = document.querySelectorAll(".close");
// tCloses.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     //   versi span
//     // e.target.parentElement.style.display = "none";
//     e.preventDefault();
//     e.target.parentElement.style.display = "none";
//     // Stop event dari card
//     e.stopPropagation();
//   });
// });
// const cards = document.querySelectorAll(".card");

// cards.forEach((el) => {
//   el.addEventListener("click", function () {
//     alert("Oke!");
//   });
// });

const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  //   console.log(e.target);
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
  }
});
