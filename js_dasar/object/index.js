// Object sama dengan array assosiative di php
// merupakan pasangan antara key dan value
var mahasiswa = {
  nama: "Waluyo",
  ips: [3.47, 3.57, 3.75],
  ipk: function () {
    let result = 0;
    for (let i = 0; i < this.ips.length; i++) {
      result += this.ips[i];
    }
    return result / this.ips.length;
  },
};
// Cara memanggilnya bisa menggunakan . atau []
// misal mahasiwa.nama / mahasiswa["nama"]
console.log(`mahasiswa`, mahasiswa.ipk());
