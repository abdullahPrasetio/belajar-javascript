// 1.Buatlah sebuah deret fibonnaci sebanyak 20 angka:

// let angkaPertama = 0;
// let angkaKedua = 1;
// let hasil = `${angkaPertama}${angkaKedua}`;
// for (let i = 0; i < 2; i++) {
//   let result = angkaPertama + angkaKedua;
//   hasil += result;
//   angkaPertama = angkaKedua;
//   angkaKedua = result;
// }

// console.log(hasil);

// let hasil = "";
// for (let i = 1; i <= 20; i++) {
//   for (let j = 0; j < i; j++) {
//     hasil += "* ";
//   }
//   hasil += "\n";
// }
// // Hasil
// // *
// // **
// // ***
// console.log(hasil);
// let panjang = 5;
// let hasil = "";
// for (let i = panjang; i > 0; i--) {
//   for (let j = panjang; j > 0; j--) {
//     if (j > i) {
//       hasil += " ";
//     } else {
//       hasil += "* ";
//     }
//   }
//   hasil += "\n";
// }
// // Hasil
// // ****
// //  **
// //  *
// console.log(hasil);

// let assets = [
//   {
//     id: 1,
//     userId: 1,
//     name: "Macbook Pro 2021",
//   },
//   {
//     id: 2,
//     userId: 2,
//     name: "Macbook Pro 2017",
//   },
// ];

// // let karyawan = [
// //   {
// //     id: 1,
// //     nama: "Waluyo Ade Prasetio",
// //     telp: "08293939393",
// //   },
// //   {
// //     id: 2,
// //     nama: "Didi",
// //     telp: "029282728",
// //   },
// // ];
// const checkIndex = (assetId) => {
//   for (let i = 0; i < assets.length; i++) {
//     if (assets[i].id === assetId) {
//       return i;
//     }
//   }
// };
// let karyawan = [
//   {
//     id: 1,
//     nama: "Waluyo Ade Prasetio",
//     telp: "08293939393",
//     getAssets: function () {
//       return assets.filter((asset) => asset.userId == this.id);
//     },
//     addAsset: function (nama) {
//       assets.push({
//         id: assets[assets.length - 1].id + 1,
//         userId: this.id,
//         name: nama,
//       });
//       return this.asset();
//     },
//     removeAsset: function (assetId) {
//       let index = checkIndex(assetId);
//       if (index != undefined) {
//         if (assets[index].userId === this.id) {
//           assets.splice(index, 1);
//         } else {
//           console.log(
//             "Maaf anda tidak bisa menghapus asset karena ini bukan milik anda"
//           );
//         }
//       }
//       return this.asset();
//     },
//   },
//   {
//     id: 2,
//     nama: "Didi",
//     telp: "029282728",
//     asset: function () {
//       return assets.filter((asset) => asset.userId == this.id);
//     },
//   },
// ];
let hasil = "*";
for (let i = 1; i <= 20; i++) {
  for (let j = 0; j < i; j++) {
    // hasil += "* ";
    console.log(bintang(i));
  }
}
// // Hasil
// // *
// // **
// // ***
// console.log(hasil);
