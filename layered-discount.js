
function layeredDiscound(quantity) {

    const first100 = 100;
    const second = 90;
    const third = 70;

    if( quantity<=100){
        const total = quantity*100;
        return total;
    }

    else if(quantity<=200){
        const firstTotal= first100*quantity;
        const reamainingquantity = quantity-firstTotal;
        const remaingTotal = reamainingquantity*second;
        const total = first100+remaingTotal;
        return total;

    }
    else{
        const first100total = 100*first100;
        const second200 = 100*second;
        const reamainingquantity = quantity-200;
        const remaingTotal= reamainingquantity*third;
        const total =first100total+second200+ remaingTotal;
        return total;
    }


}

const LayerDis = layeredDiscound(100);
console.log(LayerDis);