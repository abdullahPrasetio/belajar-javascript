const button = document.getElementById("btn-ubah-warna");
button.addEventListener("click", function () {
  //   document.body.style.backgroundColor = button.getAttribute("value");
  document.body.classList.toggle(button.getAttribute("value"));
  document.body.removeAttribute("style");
});

const buttonRandom = document.createElement("button");
const textButton = document.createTextNode("Random Warna");
buttonRandom.appendChild(textButton);
buttonRandom.setAttribute("type", "button");
// Cara Lama
// document.body.appendChild(buttonRandom);
// Cara baru
button.after(buttonRandom);
buttonRandom.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const inputRed = document.querySelector("input[name='red']");
const inputGreen = document.querySelector("input[name='green']");
const inputBlue = document.querySelector("input[name='blue']");

const changeBodyColor = () => {
  //   document.body.style.backgroundColor = "rgb(" + inputRed.value + ",100,100)";
  document.body.style.backgroundColor =
    "rgb(" +
    inputRed.value +
    "," +
    inputGreen.value +
    "," +
    inputBlue.value +
    ")";
};
// Setelah lepas klik baru jalan menggunakan change
// inputRed.addEventListener("change", changeBodyColor);
// inputGreen.addEventListener("change", changeBodyColor);
// inputBlue.addEventListener("change", changeBodyColor);

// realtime menggunakan input
inputRed.addEventListener("input", changeBodyColor);
inputGreen.addEventListener("input", changeBodyColor);
inputBlue.addEventListener("input", changeBodyColor);

// Dibaca ketika mouse bergerak didalam body
// document.body.addEventListener("mousemove", function (e) {
//   // posisi mouse
//   // e adalah sebuah object yang dikirim kedalam function
//   // console.log(e.clientX);
//   // ukuran browser
//   // inner width untuk mengetahui lebar yang putih / body
//   // console.log(window.innerWidth);
//   // Posisi sumbu X
//   const xPos = Math.round((e.clientX / window.innerWidth) * 255);
//   const yPos = Math.round((e.clientY / window.innerHeight) * 255);
//   console.log(xPos);
//   document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
// });
