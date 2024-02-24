const Products =[
    {shirt:'black', price: '400'},
    {shaw:'black', price: '300'},
    {pant:'black', price: '200'},
    {bald:'black', price: '100'}
]

function getTotal(Products){
    let getPrice= 0;
    for( const TotalPrice of Products){

        getPrice= getPrice+TotalPrice.price;
    }
    return getPrice;


}

const getPrice = getTotal(Products);
console.log('Total price is:',getPrice);