// alert
// alert("Halo");
// alert("Nama");
// alert("Saya");
// alert("Waluyo");

// prompt;
// var nama = prompt("Masukkan nama anda ");
// alert("Nama saya adalah " + nama);

// // COnfirm
// var result = confirm("Apakah kamu yakin akan menghapus nama?");
// if (result) {
//   nama = "";
//   alert("Nama berhasil dihapus");
// }

alert("Selamat datang");

var lagi = true;
var nama = "";
while (lagi === true) {
  nama = prompt("Masukkan nama anda");
  alert("Halo " + nama);

  lagi = confirm("Apakah mau memasukan nama lagi");
}

alert("Terimakasih " + nama);
