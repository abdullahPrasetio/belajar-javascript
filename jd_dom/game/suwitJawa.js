// Menangkap pilihan player
let p = prompt("pilih :gajah,semut,orang");

// Menangkap pilihan computer
// Membangkitkan bilanagn random
var comp = Math.random();
if (comp < 0.34) {
  comp = "gajah";
} else if (comp >= 0.34 && comp < 0.67) {
  comp = "orang";
} else {
  comp = "semut";
}
// Menentujan  rules
var result = "";
if (p == comp) {
  result = "Seri";
} else if (p == "gajah") {
  result = comp == "orang" ? "Menang" : "Kalah";
} else if (p == "orang") {
  result = comp == "gajah" ? "Kalah" : "Menang";
} else if (p == "semut") {
  result = comp == "gajah" ? "Menang" : "Kalah";
}
// MEnampilkan pemenang
