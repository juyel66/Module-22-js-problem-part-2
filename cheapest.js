const Mobile =[
    { Name: 'Samsung', Price: '220000', color:'Black'},
    { Name: 'Iphone', Price: '203000', color:'Black'},
    { Name: 'Walton', Price: '200400', color:'Black'},
    { Name: 'Opp', Price: '2000', color:'Black'},
    { Name: 'Hp', Price: '2003500', color:'Black'},
]



function getCheap(Mobile){
    let min= Mobile[0]
    for ( const  phone of Mobile){
        if( phone.Price<min.Price){
            min=phone;
        }
    }
    return min;
   

}

const cheap = getCheap(Mobile);
console.log(cheap);