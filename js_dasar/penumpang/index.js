// Tambah Penumpang
// 2 parameter:
// -nama penumpang
// array penumpang

// Rules
// jika angkot kosong, penumpang naik duduk di kursi pertama
// penumpang berikutnya duduk di kursi selanjutnya secara berurutan
// Jika ada kursi kosong (Karena penumpang turun)
// Asumsi kursi tiakan penuh dan akan bertambah ketika penumpang naik
// Nama penumpang tidak boleh sama menghindari kebingungan ketika penumpang turun

// array penumpang
var penumpang = [];
// Versi saya
// const tambahPenumpang = (namaPenumpang) => {
//   if (penumpang.length == 0) {
//     penumpang.unshift(namaPenumpang);
//   } else {
//     let index = penumpang.indexOf(undefined);
//     if (index != -1) {
//       penumpang.splice(index, 1, namaPenumpang);
//     } else {
//       let penumpangSama = penumpang.indexOf(namaPenumpang);
//       if (penumpangSama == -1) {
//         penumpang.push(namaPenumpang);
//       } else {
//         console.log("Error nama penumpang sama");
//       }
//     }
//   }
// };
// const hapusPenumpang = (namaPenumpang) => {
//   let cariPenumpang = penumpang.indexOf(namaPenumpang);
//   if (cariPenumpang > -1) {
//     penumpang.splice(cariPenumpang, 1);
//   }
//   console.log("Data penumpang tidak ditemukan");
// };
// tambahPenumpang("waluyo");
// tambahPenumpang(undefined);
// tambahPenumpang("Andi");
// tambahPenumpang("Aga");
// hapusPenumpang("waluyo");
// hapusPenumpang("Aga");
// tambahPenumpang("waluyo");

// console.log(`penumpang`, penumpang);

// Versi WPU
var tambahPenumpang = (namaPenumpang, penumpang) => {
  // Jika angkot Kosong
  if (penumpang.length == 0) {
    //   tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // Kembalikan isi array& keluar dari function
    return penumpang;
  } else {
    //   Telusuri seluruh kursi dari awal
    for (let i = 0; i < penumpang.length; i++) {
      //   jika ada kursi kosong
      if (penumpang[i] == undefined) {
        //   tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // Kembalikan isi array& keluar dari function
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log(namaPenumpang + " Sudah ada di dalam angkot");
      } else if (i == penumpang.length - 1) {
        // Jika seluruh kursi terisi
        penumpang.push(namaPenumpang);
        // Kembalikan isi array& keluar dari function
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = (namaPenumpang, penumpang) => {
  if (penumpang.length == 0) {
    //   tambah penumpang di awal array
    console.log("Angkot Kosong");
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        if (penumpang.length == 1) {
          penumpang.pop();
        } else {
          penumpang[i] = undefined;
        }
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " Tidak ada di dalam angkot");
      }
    }
  }

  return penumpang;
};
