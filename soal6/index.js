let kalimat = "Hello! Wo!rld!"
let ucapan = kalimat.split('')
let hasil = ucapan.filter(ucapan => ucapan!== "!")
console.log(hasil);