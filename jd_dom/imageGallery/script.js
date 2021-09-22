// Versi saya
// const jumbo = document.querySelector(".jumbo");
// const listImage = document.querySelectorAll(".thumb");

// listImage.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     jumbo.setAttribute("src", e.target.getAttribute("src"));
//   });
// });

const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");

container.addEventListener("click", function (e) {
  // Cek apakah yang di klik adalah thumb
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);
    const activeClass = document.querySelector(".active");
    if (activeClass) {
      activeClass.classList.toggle("active");
    }
    e.target.classList.add("active");
  }
});
