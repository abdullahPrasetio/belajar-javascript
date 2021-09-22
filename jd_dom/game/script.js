// Modifikasi score
let scorePlayer = 0;
let scoreComputer = 0;
const papanScoreComputer = document.querySelector(
  ".score h2:nth-child(1) span"
);
const papanScorePlayer = document.querySelector(".score h2:nth-child(2) span");
// Modifikasi score

const getPilihanComputer = () => {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";

  return "semut";
};

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  //   interval putaran
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", `img/${gambar[i++]}.png`);
    if (i == gambar.length) i = 0;
  }, 50);
}
function getHasil(comp, player) {
  if (player == comp) return "Seri";
  if (player == "gajah") return comp == "orang" ? "Menang" : "Kalah";
  if (player == "orang") return comp == "gajah" ? "Kalah" : "Menang";
  if (player == "semut") return comp == "gajah" ? "Menang" : "Kalah";
}
// Cara Saya
// const pGajah = document.querySelector(".gajah");
// const pSemut = document.querySelector(".semut");
// const pOrang = document.querySelector(".orang");
const infoPemenang = document.querySelector(".info");
const gComp = document.querySelector("div.area-komputer img");

// const suwitDimulai = (player) => {
//   const pComp = getPilihanComputer();
//   gComp.setAttribute("src", `img/${pComp}.png`);
//   const result = getHasil(pComp, player);
//   infoPemenang.innerHTML = result;
// };

// pGajah.addEventListener("click", function () {
//   suwitDimulai("gajah");
// });
// pSemut.addEventListener("click", function () {
//   suwitDimulai("semut");
// });
// pOrang.addEventListener("click", function () {
//   suwitDimulai("orang");
// });

// Variasi
const pilihan = document.querySelectorAll("li img");
const suwitDimulai = (player) => {
  const pComp = getPilihanComputer();
  gComp.setAttribute("src", `img/${pComp}.png`);
  const result = getHasil(pComp, player);
  //   Modifikasi score
  if (result == "Menang") {
    scorePlayer++;
    papanScorePlayer.innerHTML = scorePlayer;
  } else if (result == "Kalah") {
    scoreComputer++;
    papanScoreComputer.innerHTML = scoreComputer;
  }
  //   Modifikasi score
  infoPemenang.innerHTML = result;
};
// console.log(pilihan);
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    putar();
    // tunggu Setelah fungsi putar selesai
    setTimeout(function () {
      suwitDimulai(pil.className);
    }, 1000);
  });
});
