**pertama**
membuat variable let dengan isi kalimat, dengan isi seperti berikut :
`let kalimat = "Hello! Wo!rld!"`
**kedua**
membuat variable let dengan isi ucapan, dengan isi seperti berikut :
`let ucapan = kalimat.split('')`
fungsi split yaitu untuk mengubah String menjadi Array.
**ketiga**
membuat variable let dengan isi hasil, dengan isi seperti berikut :
`let hasil = ucapan.filter(ucapan => ucapan!== "!")`
filter() merupakan method array di JavaScript yang berfungsi untuk mencari semua elemen di dalam array yang sesuai dengan kriteria tertentu.
Method ini mengembalikan array baru yang berisi elemen yang sesuai dengan kriteria yang dicari atau lulus pengujian fungsi callback.