function store(input) {

    input.sort();
    let obj = {};
    

    for (let line of input) {

        let [product, price] = line.split(' : ');
        let letter = product[0];

        if (!obj[letter]) {
            obj[letter] = [];
        }
        obj[letter].push(product, Number(price));


    }

    
  
    /*for (const key in obj) {
        console.log(key)
        for (let i = 0, i < obj[key].length, i ++) {

            console.log();
            line += 2;
        }
        

    } */
}


store(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);