// Belajar tentang this
// adalah sebuah keyword spesial yang otomatis dibuat pada setiap function/object
//contoh
// jika ditaruh di global this adalah window
// var a = 10;
// console.log(this);
// console.log(this.a);

// Function declaration
// function halo() {
//   // sama dengan jika di taruh di global scope
//   console.log(this);
//   console.log("Halo");
// }
// // this mengembalikan object global
// this.halo(); // halo()

// Object Literal
// var obj = {
//   nama: "Waluyo",
//   umur: 32,
// };
// obj.halo = function () {
//   // Jika ditaruh di object literal maka akan mengembalikan object itu sendiri
//   console.log(this);
//   console.log("Halo");
// };
// obj.halo();

// Constructor
function Halo() {
  // this mengembalikan object yang baru di buat
  this.nama = "Andi";
  console.log(this);
  console.log("Halo");
}

new Halo();
