function calorie(input) {
    let obj = {};

    for (let i = 0; i < input.length; i+=2) {
        let current = input[i];
        let calories = Number(input[i + 1]);
        obj[current] = calories;
        
    }
    console.log(obj);
}

calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorie(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);