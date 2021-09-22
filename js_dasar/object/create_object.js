// Membuat object

// 1.object literal
var mahasiswa = {
  nama: "Waluyo Ade Prasetio",
  jurusan: "Teknik Informatika",
  email: "temancode@gmail.com",
  npm: "201743500312",
};

var mahasiswa2 = {
  nama: "Aga Prabowo",
  jurusan: "Teknik Informatika",
  email: "aga@gmail.com",
  npm: "201743500333",
};

// 2. Function Declaration
function buatObjectMahasiswa(nama, npm, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.npm = npm;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMahasiswa(
  "Arvian",
  "201743500432",
  "arvian@gmail.com",
  "Teknik Elektro"
);

// 3.Constructor
// Biasanya menggunakan awalan huruf besar
function Mahasiswa(nama, npm, email, jurusan) {
  this.nama = nama;
  this.npm = npm;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa(
  "Anggi",
  "201932737321",
  "anggi@gmail.com",
  "Teknik Komputer"
);
