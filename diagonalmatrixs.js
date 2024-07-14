function diagonalDifference(matrix) {
    const n = matrix.length; //panjang matrixs
    let primaryDiagonal = 0; //jumalh diagonal utama (dari kiri atas ke kanan bawah)
    let secondaryDiagonal = 0; //jumlah diagonal kedua (dari kanan atas ke kiri bawah)

    for (let i = 0; i < n; i++) {
        primaryDiagonal += matrix[i][i]; //menambahkan elemen  diagonal utama ke primary
        secondaryDiagonal += matrix[i][n - i - 1]; //menambahkan elemen diagonal kedua ke secondary
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal); //mengembalikan nilai absolute
}

const matrix = [ //memanggil fungsi
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(diagonalDifference(matrix)); // Output: 3
