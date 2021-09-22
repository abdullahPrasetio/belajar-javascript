// getElementById() // Cari Id di satu halaman // hasil element
// getElementsByTagName() //Cari element yang memiliki tag name tertentu // bisa banyak // hasil HTMLCollection
// getElementsByClassName() //Cari element yang memiliki class name tertentu // bisa banyak // hasil HTMLCollection
//querySelector() // hasil element
//querySelectorAll()// hasil nodeList

// Dom Selection
// getElementById()
const judul = document.getElementById("judul");
judul.style.color = "#8288";
judul.style.backgroundColor = "aquamarine";
judul.innerHTML = "Waluyo Ade Prasetio";

// getElementsByTagName()
// -> HTMLCollection
const p = document.getElementsByTagName("p");
// Cara 1
// p[0].style.backgroundColor = "lightblue";
// p[1].style.backgroundColor = "lightblue";
// p[2].style.backgroundColor = "lightblue";
// p[3].style.backgroundColor = "lightblue";
// console.log(p);
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

// getElementsByClassName()
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Ini diubah dari javascript";
