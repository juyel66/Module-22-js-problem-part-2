function discountPrice( quantity){
    if( quantity<=100){
        const total= quantity*100;
        return total;
    }
    else if(quantity<=200){
        const total = quantity*90;
        return total;
    }
    else{
        const total = quantity*70;
        return total;
    }
}
const discount= discountPrice(201);
console.log('total discount rice is:',discount);