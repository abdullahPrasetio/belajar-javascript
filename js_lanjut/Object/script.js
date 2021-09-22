// Cara membuat object pada javascript
// 1. Object Literal
// Problem tidak efektif untuk object yang banyak
// let mahasiswa = {
//   nama: "Waluyo",
//   //   email: "temancode@gmail.com",
//   //   npm: "201743500312",
//   //   jurusan: "Teknik Informatika",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Selamat makan ${this.nama}`);
//   },
// };

// 2. Function Declaration
// Duplikasi pada method walaupun tidak di deklarasi
// Cara mengatasi

// Cara mengatasi
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Selamat makan ${this.nama}`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Selamat main ${this.nama}`);
//   },
// };
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   //   Cara mengatasi
//   mahasiswa.makan = methodMahasiswa.makan;
//   mahasiswa.main = methodMahasiswa.main;
//   //   Cara mengatasi
//   return mahasiswa;
// }
// let waluyo = Mahasiswa("Waluyo", 10);

// 3. Constructor function
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Selamat makan ${this.nama}`);
//   };
//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Selamat main ${this.nama}`);
//   };
// }
// let waluyo = new Mahasiswa("Waluyo", 10);
// 4. Object Create
// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   // Cara mengatasi
//   //   mahasiswa.makan = methodMahasiswa.makan;
//   //   mahasiswa.main = methodMahasiswa.main;
//   // Cara mengatasi
//   return mahasiswa;
// }
// let waluyo = Mahasiswa("Waluyo", 10);

// Prototype
// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi = this.energi + porsi;
//   return `Selamat makan ${this.nama}`;
// };
// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Selamat main ${this.nama}`;
// };
// let waluyo = new Mahasiswa("Waluyo", 10);

// Versi Class
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan(porsi) {
//     this.energi = this.energi + porsi;
//     return `Selamat makan ${this.nama}`;
//   }
//   main(jam) {
//     this.energi -= jam;
//     return `Selamat main ${this.nama}`;
//   }
// }

// let waluyo = new Mahasiswa("Waluyo", 200);
// let doddy = new Mahasiswa("doddy", 20);

let angka = [];
console.log(angka);
