function reverseAlphabet(str) { //menerima string sebagai parameter
    const alphabetPart = str.slice(0, -1); //mengambil semua karakter kecuali karakter terakhir
    const numberPart = str.slice(-1);   //mengambil karakter terakhir
    return alphabetPart.split('').reverse().join('') + numberPart; //memisahkan string menjadi array karakter dan mengembalikan array karakter lalu menggabungkan kembali array menjadi string
}

const input = "NEGIE1";
console.log(reverseAlphabet(input)); 
