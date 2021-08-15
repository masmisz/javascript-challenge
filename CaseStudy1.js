var x = 5;
var y = 8.5;

var x = parseInt(prompt('masukan bilangan pertama'));
var y = parseInt(prompt('masukan bilangan kedua'));

//buatlah proses perhitungan penjumlahan, pengurangan, perkalian, dan pembagian dari kedua variabel di atas.

//versi pakai fungsi
function penjumlahan(x, y) {
    var z = x + y;
    return z;
}

function pengurangan(x, y) {
    var z = x - y;
    return z;
}

function perkalian(x, y) {
    var z = x * y;
    return z;
}

function pembagian(x, y) {
    var z = x / y;
    return z;
}


document.write('Hasil penjumlahan kedua bilangan adalah : ' + penjumlahan(x, y) + '<br>');
document.write('Hasil pengurangan kedua bilangan adalah : ' + pengurangan(x, y) + '<br>');
document.write('Hasil perkalian kedua bilangan adalah : ' + perkalian(x, y) + '<br>');
document.write('Hasil pembagian kedua bilangan adalah : ' + pembagian(x, y).toFixed (4) + '<br>');
