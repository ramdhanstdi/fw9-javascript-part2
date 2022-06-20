const name = ['Abigail','Alexandra','Alison','Amanda','Angela','Bella','Carol', 'Caroline', 'Carolyn', 'Deidere', 'Diana','Elizabeth','Ella','Faith','Olivia','Penelope']


const searchName =(string,number,cb)=>{
    cb(string)
    let show = []
    for (let i=1; i<=number; i++){
        show.push(result[i-1]); 
    }//console.log(show);
    return show;
}

const callback = (query) => {
    return result = name.filter(list => list.toLowerCase().indexOf(query.toLowerCase())!==-1)
}


console.log(searchName('an',2,callback));
