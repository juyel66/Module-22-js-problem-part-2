function getPower(number){
    if( typeof number !== 'number'){
        return "please provide the number"

    }
    else{
        const result = Math.pow(number, 3)
    return result ;
    }
    
}
const result1 = getPower(0);
console.log(result1);


console.log(typeof "hello");