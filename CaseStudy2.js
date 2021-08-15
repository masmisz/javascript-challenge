function nilaiPeserta(nilai) {
    /* 
        Buat proses seleksi kondisi untuk melakukan klasifikasi nilai peserta dengan rincian:
        A = 80 - 100
        B = 60 - 80
        C = 40 - 60
        D = 20 - 40
        E = 0 - 20
    */

    if (nilai > 80 && nilai <= 100) {
        return document.write('A' + '<br>');
    } else if (nilai > 60 && nilai <= 80) {
        return document.write('B' + '<br>');
    } else if (nilai > 40 && nilai <= 60) {
        return document.write('C' + '<br>');
    } else if (nilai > 20 && nilai <= 40) {
        return document.write('D' + '<br>');
    } else if (nilai >= 0 && nilai <= 20) {
        return document.write('E' + '<br>');
    } else {
        return document.write('Nilai tidak valid')
    }
}

/*
    Silahkan panggil fungsi nilaiPeserta dengan parameter beberapa nilai: 
    1. 5
    2. 60.5
    3. 39.5
    4. 50
    5. 101
*/

nilaiPeserta(5);
nilaiPeserta(60.5);
nilaiPeserta(39.5);
nilaiPeserta(50);
nilaiPeserta(101);
