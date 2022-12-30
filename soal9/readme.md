**pertama**
membuat function film dengan isi (judul, durasi, genre, tahun)
`function film(judul, durasi, genre, tahun){`

**kedua**
membuat variable film dengan isi (judul, durasi, genre, tahun)
`  var film = {}; 
    (film.judul = judul),
    (film.durasi = durasi),
    (film.genre = genre),
    (film.tahun = tahun);`

**ketiga**
membuat return
`return film;`

**keempat**
membuat function tambahDataFilm
`function tambahDataFilm(){ `

**kelima**
membuat variable film dengan array kosong
`   var films = []; 
    var a = film("End Game", "3 jam", "action", "2019")
    var b = film("Infinity War", "2 jam", "action", "2019")
    var c = film('Iron Man 1', '2 Jam', 'Action',  "2018")
    var d = film('Captain Marvel', '2 Jam', 'Action',  "2018")
    var e = film('Doctor Strange', '2 Jam', 'Action', "2018")`

**keenam**
memanggil variable films dengan method push
`films.push(a,b,c,d,e) `

**ketujuh**
memanggil function tambahDataFilm
`tambahDataFilm()`

maka akan menghasilkan output seperti berikut:
` {judul: 'End Game', durasi: '3 jam', genre: 'action', tahun: '2019'}
 {judul: 'Infinity War', durasi: '2 jam', genre: 'action', tahun: '2019'}
 {judul: 'Iron Man 1', durasi: '2 Jam', genre: 'Action', tahun: '2018'}
 {judul: 'Captain Marvel', durasi: '2 Jam', genre: 'Action', tahun: '2018'}
 {judul: 'Doctor Strange', durasi: '2 Jam', genre: 'Action', tahun: '2018'} `