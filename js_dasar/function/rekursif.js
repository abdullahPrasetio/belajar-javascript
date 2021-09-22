// contoh rekursif saya 1
// var hasil = [];
// function faktorial(n) {
//   if (n !== 0) {
//     hasil.push(n);
//     console.log("hello " + n);
//     faktorial(n - 1);
//   }
//   return hasil;
// }

// console.log(faktorial(100));

// contoh rekursif saya 2
// var hasil = 0;
// function faktorialTambah(n) {
//   if (n === 0) {
//     return 0;
//   }
//   console.log(`n`, n);
//   return n + faktorialTambah(n - 1);
// }

// console.log(faktorialTambah(5));

function faktorial(n) {
  if (n === 0) {
    return 1;
  }
  console.log(`n`, n);
  return n * faktorial(n - 1);
}

console.log(faktorial(3));
