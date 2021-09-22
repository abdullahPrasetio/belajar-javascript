// Function BUild in di javascript diantaranya
// charAt,slice,split,toString,toLowerCase,toUpperCase
// Link lengkap
// https://www.w3schools.com/jsref/jsref_obj_string.asp

//Hitung volume kubus
// function volumeKubus(s) {
//   return s * s * s;
// }
// esnext
const volumeKubus = (s) => s * s * s;

// jumlahkan 2 kubus
// function jumlahKubus(a, b) {
//   return volumeKubus(a) + volumeKubus(b);
// }
// esnext
const jumlahKubus = (a, b) => volumeKubus(a) + volumeKubus(b);

console.log(jumlahKubus(8, 3));
