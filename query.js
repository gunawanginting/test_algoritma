function queryCount(INPUT, QUERY) {
    return QUERY.map(query =>  // integrasi setiap elemen
        INPUT.filter(word => word === query).length); //menyaring elemen input yang sama dengan query serta menghitung jumlah elemen yang cocok
}

const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
console.log(queryCount(INPUT, QUERY)); 
