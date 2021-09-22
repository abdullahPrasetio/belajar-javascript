// Manipulasi element //Mengubah isi element //
// -element.innerHTML
// -element.style.<property>
// -element.setAttribute() //element.getAttribute() // element.removeAttribute()
// -element.classList //add//remove//toggle//item//contains//replace

// 1.element.innerHTML
// const judul = document.getElementById("judul");
// const judul = document.getElementsByTagName("h1")[0];
// judul.innerHTML = "Waluyo";
// judul.innerHTML = "<a href='test.html'>Hello</a>";
// const sectionA = document.querySelector("section#a");

// sectionA.innerHTML = "<p>Hello world!</p>";

// 2.element.style.<property>
// const judul = document.querySelector("#judul");
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "orange";

// 3.element.setAttribute()
// const judul = document.getElementsByTagName("h1")[0];
// // judul.setAttribute("name", "HEllo");
// const a = document.querySelector("section#a a");
// a.setAttribute("id", "link");
// a.getAttribute("href");
// Jika menggunakan setAttribute akan menimpa value dari attribute
// jika attribute tersebut sudah ada maka kita bisa gunakan classList
// const p2 = document.querySelector(".p2");
// p2.setAttribute("class", "label");

// 4.element.classList
// toggle jika element belum memiliki class tersebut maka class akan di tambahkan
// namun jika sudah memiliki class maka class akan di hapus
// item untuk mengetahui class tertentu dari sebuah element misal punya 3 class nah kita bisa cek class3 terebut apa
// contains untuk mengecek apakah element memiliki class tertentu
// replace untuk mengganti class dengan yang lainnya
const p2 = document.querySelector(".p2");
p2.classList.add("biru-muda"); //tambahclass
p2.classList.remove("biru-muda"); //hapus class
p2.classList.toggle("biru-muda"); //true/false tambah/hapus class
p2.classList.contains("biru-muda"); //true/false
p2.classList.contains("biru-muda", "biru"); //true/false Ganti biru-muda menjadi biru
