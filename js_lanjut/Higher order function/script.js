// FUnction yang dijadikan argument disebut callback
// function yang memiliki  callback disebut higher order function

// function kerjakanTugas(mataKuliah, selesai) {
//   console.log(`Mulai mengerjakan tugas ${mataKuliah}`);
//   selesai();
// }

// function selesai() {
//   alert("Tugas selesai dikerjakan");
// }

// filter, map , reduce
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >=3
// menggunakan for
// let angka2 = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     angka2.push(angka[i]);
//   }
// }

// console.log(angka2);

// menggunakan filter
// const angka2 = angka.filter((e) => e >= 3);

// menggunkan map
// const angka2 = angka.map((a) => a * 2);

// Menggunakan reduce
// jumlahkan semua element pada array
// const angka2 = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(angka2);

// method chaining
// cari angka > 5
// kalikan 3
// jumlahkan

const hasil = angka
  .filter((a) => a > 5) //8,9,9
  .map((a) => a * 3) //24,27,17
  .reduce((acc, cur) => acc + cur);
console.log(hasil);
