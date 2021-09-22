// Expresion function
// const tampilNama = function (nama) {
//   return `halo ${nama}`;
// };
// Arrow function
// const tampilNama = (nama) => `halo ${nama}`;
// Jika hanya 1 paramenter
// const tampilNama = nama => `halo ${nama}`;
// Jika tanpa paramenter
// const tampilNama = () => `halo ${nama}`;

// console.log(tampilNama("Waluyo"));

// let mahasiswa = ["Waluyo Ade Prasetio", "Aga Prabowo", "Arvian"];

// tanpa arrow function
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// Jika ingin mengembalikan object
// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama: nama,
//   jumlahHuruf: nama.length,
// }));
// console.log(jumlahHuruf);

// Konsep this pada arrow function

// constructor function
// const Mahasiswa = function () {
//   this.nama = "Waluyo";
//   this.umur = "25";
//   this.sayHello = function () {
//     console.log(`Hello ${this.nama}`);
//   };
//   console.log(this);
// };

// const waluyo = new Mahasiswa();

// Arrow function
// const Mahasiswa = function () {
//   this.nama = "Waluyo";
//   this.umur = "25";
//   this.sayHello = () => {
//     console.log(`Hello ${this.nama}`);
//   };
//   console.log(this);
// };

// const waluyo = new Mahasiswa();

// Object Literal
// const mhs = {
//   nama: "Waluyo",
//   umur: "25",
//   sayHello: () => {
//     console.log(`Hello ${this.nama}`);
//   },
// };

// constructor function
// const Mahasiswa = function () {
//   this.nama = "Waluyo";
//   this.umur = "25";
//   this.sayHello = function () {
//     console.log(`Hello ${this.nama}`);
//   };
//   //   JIka tidak menggunakan arrow function maka akan error
//   //   setInterval(function () {
//   //     console.log(this.umur++);
//   //   }, 500);
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };

// const waluyo = new Mahasiswa();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  //   console.log(this);
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
