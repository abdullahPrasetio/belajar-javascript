let nama = ["Waluyo", "Aga", "arvian"];
// push untuk menambahkan array di akhir
nama.push("budi", "fitry");
// pop menghapus element terakhir di array
// nama.pop();

// Unshif dan shift
// Unshift menambahakan element pertama pada array
// nama.unshift("Dhani");
// Shift
// Menghilangkan element pertama pada array
// nama.shift();

// Splice
// nama.splice(indexawal, maudihapusberapa, elemenbaru);
// nama.splice(2, 0, "Arvian Maulana", "Ria Riski");

// Slice
// slice(awal,akhir)
// nama.slice(0, 2);

// foreach
// cara saya
// nama.forEach((element) => {
//   console.log(element);
// });

// Cara web unpas
// var cetak = function (e) {
//   console.log(e);
// };
// nama.forEach(cetak);
// nama.forEach(function (e, i) {
//   console.log("Mahasiswa ke-" + (i + 1) + " adalah : " + e);
// });

// Map
// Mengembalikan nilai array
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join(" - "));

// Sort untuk mengurutkan array
// var angka = [20, 54, 12, 0, 9, 1, 2, 3, 4, 19, 0.5, 5, 6, 7, 8];
// console.log(angka.join(" - "));
// angka.sort();
// console.log(angka.join(" - "));
// // Jika masih tidak urut
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

// Filter
// Mencari element array dan mengembalikan banyak nilai/array
var angka = [20, 54, 12, 0, 9, 1, 2, 3, 4, 19, 0.5, 5, 6, 7, 8];
var angka2 = angka.filter(function (x) {
  //   return x == 5;
  return x > 5;
});
console.log(angka2);

// Find
// Mencari element array dan mengembalikan satu nilai yaitu nilai pertama
var angka = [20, 54, 12, 0, 9, 1, 2, 3, 4, 19, 0.5, 5, 6, 7, 8];
var angka2 = angka.find(function (x) {
  //   return x == 5;
  return x > 5;
});
console.log(angka2);
