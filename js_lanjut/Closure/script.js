// function init() {
//   let nama = "Waluyo Ade Prasetio";

//   function tampilNama() {
// jika nama di panggil dari parent function maka ini disebut closures
//     console.log(nama);
//   }
//   tampilNama();
// }

// init();

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama},selamat ${waktu}, semoga harimu menyenangkan`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");
// console.dir(selamatPagi);
// selamatPagi("Waluyo");

// Jika sperti ini maka saat kita definisikan ulang variable nya maka akan terganggu
// let counter = 0;
// let add = function () {
//   return ++counter;
// };
// // Misal
// counter = 10;

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
//solusi
// let add = function () {
//   let counter = 0;
//   return function () {
//     return ++counter;
//   };
// };

// let a = add();
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// console.log(a());
// jika function tidak ingin ditampung terlebih dahulu ke dalam variabel
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();
console.log(add());
console.log(add());
console.log(add());
