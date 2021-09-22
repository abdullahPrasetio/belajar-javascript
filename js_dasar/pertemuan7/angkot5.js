let jumlahAngkot = 10;
let noAngkot = 1;
let angkotBeroperasi = 3;

// Cara Saya
for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi)
    console.log(`Angkot No. ${noAngkot} beroperasi dengan baik`);
  else if (noAngkot === 8 || noAngkot === 10)
    console.log(`Angkot No. ${noAngkot} sedang lembur`);
  else console.log(`Angkot No. ${noAngkot} sedang tidak beroperasi`);
}
