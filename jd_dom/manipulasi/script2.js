// Manipulasi Node // Menambah atau menghapus element //
// document.createElement()
// document.createTextNode()
// node.appendChild()
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()

// document.createElement()
// Buat element baru
const pBaru = document.createElement("p");
// Buat tulisan
const teksPbaru = document.createTextNode("Paragragf Baru");
// Simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPbaru);
// Simpan pBaru di akhir section A
// const sectionA = document.querySelector("section#a");
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// Simpan ditengah
// cara saya
const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("List item by javascript");
liBaru.appendChild(textLiBaru);
// Simpan ditengah antara item 1 dan item 2
// const ul = document.querySelector("ul");
// // childNodes pilih anak yang dimau
// ul.insertBefore(liBaru, ul.childNodes[2]);

// Cara pa dhika
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li2);

// parentNode.removeChild()
// tangkap parent dan tangkap element
const link = sectionA.querySelector("a");
sectionA.removeChild(link);

// parentNode.replaceChild()
// tangkap parent dan tangkap element dan ubah child
const sectionB = document.getElementById("b");
const p4 = sectionB.getElementsByTagName("p")[0];

const h2Baru = document.createElement("h2");
const textH2Baru = document.createTextNode("Judul 2");
h2Baru.appendChild(textH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightblue";
liBaru.style.backgroundColor = "lightblue";
h2Baru.style.backgroundColor = "lightblue";

// Method baru
parentNode.append();
parentNode.prepend();
childNodes.before();
childNodes.after();
childNodes.remove();
childNodes.replaceWith(h2Baru);
