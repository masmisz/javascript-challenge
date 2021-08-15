/*
    Buatlah sebuah fungsi dengan kemampuan sebagai berikut:
        - apabila parameter ("luas permukaan",10,20,30) maka akan mengembalikan nilai luas permukaan kubus.
        - apabila parameter ("volume",10,20,30) maka akan mengembalikan nilai keliling.
*/

var input = prompt('masukkan jenis perhitungan :',  'luas permukaan/volume');
var inputPanjang = parseInt(prompt('Masukkan panjang :'));
var inputLebar = parseInt(prompt('Masukkan lebar :'));
var inputTinggi = parseInt(prompt('Masukkan tinggi :'));

balok(input, inputPanjang, inputLebar, inputTinggi);

function balok(jenis, panjang, lebar, tinggi) {
    if (jenis == 'luas permukaan') {
        var luasPermukaan = 2 * ((panjang * lebar) + (panjang * tinggi) + (lebar * tinggi));
        return document.write(luasPermukaan);
    } else if (jenis == 'volume') {
        var volume = panjang * lebar * tinggi;
        return document.write(volume);
    } else {
        return document.write('error');
    }
}
