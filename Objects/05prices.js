function solve(input) {

    let towns = {};
    
    for (let line of input) {
       let [town, product, price] = line.split(' | ');
       price = Number(price);
      
       if(!towns[product] || price < towns[product].price) {
           towns[product] = {
               town: town,
               price ,
           }
       }
       
       
    }
    //{productName} -> {productLowestPrice} ({townName})
    //console.log(towns);

    for (const key in towns) {
        console.log(`${key} -> ${towns[key].price} (${towns[key].town})`)
            
        
    }
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 4',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);