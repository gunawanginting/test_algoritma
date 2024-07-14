function longest(sentence) {
    const words = sentence.split(' '); //memisahkan kalimat menggunakan spasi sebagai pemisah
    let longestWord = ''; //jika panjang kata lebih besar daripada kata terpanjang

    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word; //update dengan kata terpanjang saat ini
        }
    });

    return `${longestWord}: ${longestWord.length} characters`;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longest(sentence)); 

