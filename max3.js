const a= 23;
 const b= 430;
 const  c= 50;

 if(a>b && a>c){
    console.log('Largest number is a:',a);

 }
 else if( b>a && b>c){
    console.log( 'largest number is b:',b);
 }
else{
    console.log('Largest number is c:',c);
}



// inside the function 
function threeNUmber(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if( b>a && b>c){
        return b;

    }
    else{
        return c;
    }
}
const largestNumber = threeNUmber(50,30,200);
console.log( 'Largest number is:', largestNumber);



const max = Math.max(23,34,23,23,34,45,465,34,23,12,1,1,112111,2,23);
console.log('Max number is:',max)
