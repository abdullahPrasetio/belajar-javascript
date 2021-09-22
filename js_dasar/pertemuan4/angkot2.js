let jumlahAngkot = 10;
let noAngkot = 1;
let angkotBeroperasi = 8;
while (noAngkot <= angkotBeroperasi) {
  //   console.log("Angkot No. " + noAngkot + " beroperasi dengan baik");
  console.log(`Angkot No. ${noAngkot} beroperasi dengan baik`);
  noAngkot++;
}

// Cara Saya
for (
  noAngkot;
  noAngkot > angkotBeroperasi && noAngkot <= jumlahAngkot;
  noAngkot++
) {
  console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi`);
}

// Cara Pak Dhika
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
  console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi`);
}
