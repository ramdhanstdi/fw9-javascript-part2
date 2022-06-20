const seleksiNilai = (nilaiAwal,nilaiAkhir,dataArray) =>{
    
    const sortedArray = dataArray.sort((a, b) => a - b);
    if(nilaiAwal > nilaiAkhir){
        return console.log("Nilai akhir harus lebih besar dari Nilai Awal");
    }else{
        if(sortedArray.length<5){
            return console.log('jumlah data array kurang dari 5');
        }else{
            const iterator = sortedArray.values()
            let result = []
            let arr = null
            let str = ''
                for(const value of iterator){
                    if(value>nilaiAwal&&value<nilaiAkhir){
                        str = value.toString()
                        arr = [str]
                        result.push(arr)
                        }
                    }const number = result.map(Number)
                    console.log(number);
        }
    }
}


seleksiNilai(5,20,[2,25,4,14,17,30,8])