// 1 Find 
const items = ['sword', 'rock', 'stone']

const finder = (item) =>{
    return item === 'rock'
    }
console.log(items.find(finder));
//Find method mengembalikan elemen pertama yang berada dalam array dan telah sesuai dengan fungsinya, jika tidak ada akan mengembalikan undefined

//2 toLowerCase
const text = "Halo nAma SaYa HahahHAha"

console.log(text.toLocaleLowerCase());
//toLoweeCase method membuat semua string menjadi lower case

//3 Array from
console.log(Array.from('hallo'));
//Method ini berfungsi untuk mengubah string menjadi Array

//4 forEach
const array1 = [1,2,3,32,43,4]

array1.forEach(cb => console.log(cb))
//untuk mengeksekusi fungsi yang di sediakan untuk array, mirip looping

//5 shift
const array2 = [2,43,41,23,1]

const aShift = array2.shift();
console.log(array2);
console.log(aShift);
//mengeluarkan nilai dari index dari array pertama

// 6 include
const animal = ['cat','donkey','fish']

console.log(animal.includes('fish'))
//memeriksa apakah di dalam array ada sebuah value dan akan mereturn nilain boolean

// 7 search
const text1 = "halo semuanya"

console.log(text1.search('o'));
// mencari posisi karakter dalam string

// 8 toString
const array3 = ['rahasia',2,'halo']

console.log(array3.toString());
//mengubah array menjadi string

//9 findIndex
const fIndex = ['saya','halo','aku','you']
const funcIndex = (findI) => findI === 'you'
console.log(fIndex.findIndex(funcIndex));
// untuk mencari index ke n dari sebuah array, bila tidak ditemukan akan mereturn -1

//10 slice 
const fSlice = [1,6,4,3,23,4]
console.log(fSlice.slice(3));
//untuk mengeluarkan data dimulai sesuai dengan index yang di berikan