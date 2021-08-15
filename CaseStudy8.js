/*Terdapat 5 data nama berikut ini: 
    1. Budi 
    2. Adi 
    3. Gunawan 
    4. Joko 
    5. Bambang 
Silahkan berikan kondisi ketika nama di atas diinputkan akan mengeluarkan output "Boleh masuk!" dan selain nama di atas akan mengeluarkan output "Tidak boleh masuk!". 
*/

var nama = prompt('Masukkan nama :', 'Budi, Adi, Gunawan, Joko, Bambang');

var answer = (input) => {
    switch (input) {
        case 'Budi'.toLowerCase():
        case 'Adi'.toLowerCase():
        case 'Gunawan'.toLowerCase():
        case 'Joko'.toLowerCase():
        case 'Bambang'.toLowerCase():
            document.write('Boleh masuk! <br>');
            break;
        default:
            document.write('Tidak boleh masuk <br>');
    }
};

answer(nama);
