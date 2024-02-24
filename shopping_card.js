const Products =[
    {shirt:'black', price: '400', quantity: 5 },
    {shaw:'black', price: '300', quantity: 1 },
    {pant:'black', price: '200', quantity: 2 },
    {bald:'black', price: '100', quantity: 3 },
]

function getProduct(Products){
    let total = 0;
    for( const Product of Products){
        total= total + Product.price;
    }
    return total;
}

const result = getProduct(Products);
console.log(result);

