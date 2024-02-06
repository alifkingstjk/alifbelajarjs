alert("selamat datang di tiket app \n yang bisa masuk hanya umur 13 keatas");

const umur = prompt("masukkan umur anda");

if (umur >= 13) {
  const studio = prompt(
    "masukkan studio yang ingin anda pesan \n A : studio A \n B : studio B \n C : studio C");

  if (studio == "A" || studio == "B" || studio == "C") {
    const film = prompt("pilih film \n 1 : Avangers \n 2 : Star wars \n 3 : Ant-Man");
    let namaFilm
    if (film == "1") {
        namaFilm = "Avangers";
    } else if (film == "2") {
        namaFilm = "Star Wars";
    } else if (film == "3") {
        namaFilm = "Ant-Man";
    }
    
     

    if (film == "1" || film == "2" || film == "3") {
      const nama = prompt("masukkan nama anda");

       alert(`berikut tiket anda! \n nama : ${nama} \n umur : ${umur} \n studio  : ${studio} \n film : ${namaFilm}`)
    } else {
      alert("maaf film yang anda pilih tidak tersedia");
    }
  } else {
    alert("anda harus memilih studio");
  }
} else {
  alert("maaf tidak bisa masuk, umur anda dibawah 13 tahun");
}
