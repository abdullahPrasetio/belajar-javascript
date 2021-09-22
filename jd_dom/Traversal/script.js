// Event Handling
// const tClose = document.querySelector(".close");
// const card = document.querySelector(".card");

// tClose.addEventListener("click", function () {
//   card.style.display = "none";
// });

// Cara saya Traversal
const tCloses = document.querySelectorAll(".close");
// for (let i = 0; i < tCloses.length; i++) {
//   tCloses[i].addEventListener("click", function (e) {
//     // tCloses[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//     // alert("tombol ke-" + i);
//   });
// }

tCloses.forEach(function (el) {
  el.addEventListener("click", function (e) {
    //   versi span
    // e.target.parentElement.style.display = "none";
    e.preventDefault();
    e.target.parentElement.style.display = "none";
  });
});

// Dom Traversal
// -parentNode /node
// - parentElement /element
// - nextSibling /node
// - nextElementSibling /element
// - previousSibling /node
// - previousElementSibling /element

const nama = document.querySelector(".nama");
console.log(nama.nextElementSibling.nextElementSibling);
