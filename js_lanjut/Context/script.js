// 2.1 Execution Context, Hoisting, Scope

// console.log(nama);
// var nama = "Waluyo";

// creation phase pada global context
// nama var=undefined;
// nama function= fn()
// hoisting
// window=global object
// this=window

// execution phase

console.log(sayHello());
var nama = "Waluyo";
var umur = 25;

function sayHello() {
  return `Hello nama saya ${nama} dan saya ber umur ${umur}`;
}

// function membuat local execution Context
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

var nama = "Waluyo ade Prasetio";
var username = "@abdullah_prasetyo__";

function cetakURL(username) {
  var instagramURL = "https://instagram.com/";
  return instagramURL + username;
}
console.log(cetakURL(username));
