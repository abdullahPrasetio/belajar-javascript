// //querySelector() // hasil element
// //querySelectorAll()// hasil nodeList

// // querySelector()
// const p4 = document.querySelector("section#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";
// // Walaupun selecteor nya mengambil tag dan jika di css akan
// // menyeleksi semua tag tapi tetap jika menggunakan queryselector
// // maka akan mengembalikan element pertama yang ditemukan
// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";

// // querySelectorAll()
// const p = document.querySelectorAll("p");
// // for (let i = 0; i < p.length; i++) {
// //   p[i].style.backgroundColor = "lightblue";
// // }
// console.log(p);

// cara ganti node root
// const p4 = document.querySelectorAll("p");
// p4[3].style.backgroundColor = "lightblue";

const sectionB = document.getElementById("b");
// const p4 = sectionB.getElementsByTagName("p");
// Cara saya
// p4[0].style.backgroundColor = "lightblue";
// cara pak dhika
const p4 = sectionB.querySelector("p");
p4.style.backgroundColor = "orange";
