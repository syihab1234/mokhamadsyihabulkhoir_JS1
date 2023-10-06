//Contoh program JavaScript dengan if, else, dan nested if

console.log("hello kawan ada sedikit rezeki di minggu ini");

var nilai = 61;

if (nilai >= 70) {
  console.log("Selamat! Anda lulus.");
} 
else {
  console.log("Maaf, Anda tidak lulus.");
}


// Contoh program JavaScript dengan switch-case

var hari = 2;

switch (hari) {
  case 1:
    console.log("Hari ini adalah Senin,jangan lupa upacara");
    break;
  case 2:
    console.log("Hari ini adalah Selasa,waktunya matkul bu diah yang cantik");
    break;
  case 3:
    console.log("Hari ini adalah Rabu,harus kuat dengan dosen yang over power");
    break;
  case 4:
    console.log("Hari ini adalah Kamis, katanya sih aku manis");
    break;
  case 5:
    console.log("Hari ini adalah Jumat, jumatan boss");
    break;
  case 6:
    console.log("Hari ini adalah Sabtu, kencan style doeloe");
    break;
  case 7:
    console.log("Hari ini adalah Minggu,rebahan");
    break;
  default:
    console.log("sejak kapan hari ada 8");
    break;
}


// Contoh program JavaScript dengan pernyataan for

for (var i = 1; i <= 5; i++) {
  console.log("rukun islam: " + i);
}


// Contoh program JavaScript dengan pernyataan while, do while

//while
var counter = 1;

while (counter <= 5) {
  console.log("Mantan ke-" + counter);
  counter++;
}

//do while
var counter = 1;

do {
  console.log("Mantan ke-" + counter);
  counter++;
} 
while (counter <= 5);


// Contoh program JavaScript dengan menggunakan fungsi

// Mendefinisikan sebuah fungsi yang menghitung luas segitiga
function hitungLuasSegitiga(alas, tinggi) {
  var luas = (alas * tinggi) / 2;
  return luas;
}

// Menggunakan fungsi untuk menghitung luas segitiga
var alasSegitiga = 10;
var tinggiSegitiga = 17;
var luasSegitiga = hitungLuasSegitiga(alasSegitiga, tinggiSegitiga);

console.log("Luas segitiga dengan alas " + alasSegitiga + " dan tinggi " + tinggiSegitiga + " adalah: " + luasSegitiga);