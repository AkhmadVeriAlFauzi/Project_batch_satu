function film(judul, durasi, genre, tahun){ 
    var film = {}; 
    (film.judul = judul),
    (film.durasi = durasi),
    (film.genre = genre),
    (film.tahun = tahun);
    
    return film; 
}

function tambahDataFilm(){ 
    var films = []; 
    var a = film("End Game", "3 jam", "action", "2019")
    var b = film("Infinity War", "2 jam", "action", "2019")
    var c = film('Iron Man 1', '2 Jam', 'Action',  "2018")
    var d = film('Captain Marvel', '2 Jam', 'Action',  "2018")
    var e = film('Doctor Strange', '2 Jam', 'Action', "2018")

    films.push(a,b,c,d,e) 

    console.log(films);
}

tambahDataFilm()