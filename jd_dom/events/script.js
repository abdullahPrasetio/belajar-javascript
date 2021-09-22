// event pada javascript merepresentasikan kejadian yang terjadi didalam dom
// Bisa dilakukan oleh user/API
// 1.Event Handler
// -Inline HTML attribute
// -Element method
// 2.addEventListener()

// 1.Event Handler
// const p3 = document.querySelector(".p3");

// function ubahWarna() {
//   p3.style.backgroundColor = "lightblue";
// }

// // Element Method

// const p2 = document.querySelector(".p2");

// function ubahWarnaP2() {
//   p2.style.backgroundColor = "lightblue";
// }
// p2.onclick = ubahWarnaP2;

// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   const ul = document.querySelector("section#b ul");
//   const li = document.createElement("li");
//   const textLi = document.createTextNode("itemBaru");
//   li.appendChild(textLi);
//   ul.appendChild(li);
// });

// perbedaan events handlewr dengan addEventListener
// Jika kita memberikan lebih dari 1 perubahan pada sebuah event ,
// event handler=> perubahan yang terakhir dilakukan akan menimpa perubahan sebelumny
// addEventListener=>dia akan menambah perubahanny

const p3 = document.querySelector(".p3");
// p3.onclick = function () {
//   p3.style.backgroundColor = "lightblue";
// };
// p3.onclick = function () {
//   p3.style.color = "red";
// };
p3.addEventListener("click", function () {
  p3.style.backgroundColor = "lightblue";
});
p3.addEventListener("click", function () {
  p3.style.color = "red";
});
