// ambil semua element video para
const daftarVideo = Array.from(document.querySelectorAll("li"));
daftarVideo.filter((e) => {
  return e.innerHTML.split("|")[0] == "JAVASCRIPT LANJUTAN";
  //   return data[0] == "JAVASCRIPT LANJUTAN ";
  console.log(data[0]);
});
console.log(daftarVideo);
// pilih hanya javascript lanjutan
