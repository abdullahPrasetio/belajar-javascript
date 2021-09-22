// Menangkap pilihan player
let p = prompt("pilij :gajah,semut,orang");

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
  result =
    "Hasilnya adalah seri karena kamu memilih " +
    p +
    "\n dan komputer memilih " +
    comp;
} else if (p == "gajah") {
  result =
    comp == "orang"
      ? "Hasilnya adalah menang karena kamu memilih " +
        p +
        "\n dan komputer memilih " +
        comp
      : "Hasilnya adalah kalah karena kamu memilih " +
        p +
        "\n dan komputer memilih " +
        comp;
} else if (p == "orang") {
  result =
    comp == "gajah"
      ? "Hasilnya adalah kalah karena kamu memilih " +
        p +
        "\n dan komputer memilih " +
        comp
      : "Hasilnya adalah menang karena kamu memilih " +
        p +
        "\n dan komputer memilih " +
        comp;
} else if (p == "semut") {
  result =
    comp == "gajah"
      ? "Hasilnya adalah menang karena kamu memilih " +
        p +
        "\n dan komputer memilih " +
        comp
      : "Hasilnya adalah kalah karena kamu memilih " +
        p +
        "\n dan komputer memilih " +
        comp;
}
// MEnampilkan pemenang
alert(result);
