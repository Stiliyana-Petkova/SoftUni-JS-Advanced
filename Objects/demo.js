let obj = {};
let arr = ['apple, 10', 'appricot, 4', 'aaa, 5'];

for (const line of arr) {
    let [fruit, price] = line.split(', ');
    obj.product = {
        fruit,
        price
    }
}

console.log(obj);