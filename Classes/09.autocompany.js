function auto(input) {
    let obj = {};
    let res = '';


    for (let line of input) {
        let [brand, model, qty] = line.split(' | ');

        if (!obj[brand]) {
            obj[brand] = [];
        };

        obj[brand].push({ model, qty });

    };
    Object.entries(obj).forEach(([key, value]) => {
        res = `${key.trim()}\n`;
        value.forEach(e => {
            res += `###${e['model'].trim()} -> ${e['qty'].trim()}\n`;
        })
        console.log(res.trim());
    })



}

auto(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);