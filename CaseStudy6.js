/*
    Buatlah sebuah fungsi dengan ketentuan :
    1. Jika user menginputkan "mentor" maka akan mencetak isi array [Akhmad, Alif, Andika, Jojo]
    2. Jika user menginputkan "ta" maka akan mencetak isi array [Adib, Valen, Vista]
    3. Jika user menginputkan "admin" maka akan mencetak isi array [Aura, Cahya]
*/

var input = prompt('Masukkan pilihan :', 'mentor, ta, admin');
var mentor = ['Akhmad', 'Alif', 'Andika', 'Jojo'];
var ta = ['Adib', 'Valen', 'Vista'];
var admin = ['Aura', 'Cahya'];

if (input == 'mentor') {
    for (let index = 0; index < mentor.length; index++) {
        document.write(mentor[index]+'<br>');
    }
} else if (input == 'ta') {
    for (let index = 0; index < ta.length; index++) {
        document.write(ta[index]+'<br>');
    }
} else if (input == 'admin') {
    for (let index = 0; index < admin.length; index++) {
        document.write(admin[index]+'<br>');
    }
} else {
    document.write('Data yang diinputkan tidak ditemukan')
}
