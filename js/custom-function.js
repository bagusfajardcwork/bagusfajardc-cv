function hitungUmur(tgllahir) {
  const hariIni = new Date();
  const lahir = new Date(tgllahir);

//   if (lahir > hariIni) {
//     return "Tanggal lahir tidak valid (masa depan)";
//   }

  // Hitung total selisih dalam milidetik
  const selisihMs = hariIni - lahir;

  // Hitung total hari
  const satuHariMs = 1000 * 60 * 60 * 24;
  const totalHari = Math.floor(selisihMs / satuHariMs);

  // Hitung tahun (asumsi 1 tahun = 365.25 hari untuk koreksi tahun kabisat)
  const tahun = Math.floor(totalHari / 365.25);
  const sisaHari = Math.floor(totalHari - tahun * 365.25);

  return `${tahun} tahun, ${sisaHari} hari`;
}
document.getElementById("umur").textContent = hitungUmur('1996-12-04');
