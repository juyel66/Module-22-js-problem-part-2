const height = [67,78,56,67,65,45,67];


function getMax( number){
    
        let max = number[0];
       for ( const num of number){
        if(num<                     max){
            max=num;
        }
       }
    return max;

}

const result= getMax(height);
console.log('Max Result is:', result);