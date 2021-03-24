function cars(input) {

    let result = {};
    let engine = {};
    let carriageObj = {};
    let array = [];
    let model = input.model;
    let power = input.power;
    let color = input.color;
    let carriage = input.carriage;
    let whells = input.wheelsize;

    result.model = model;

    if(power <= 90) {
        engine.power = 90;
        engine.volume = 1800;
        result.engine = engine;
    } else if (power > 90 && power <= 120) {
        engine.power = 120;
        engine.volume = 2400;
        result.engine = engine;
    } else {
        engine.power = 200;
        engine.volume = 3500;
        result.engine = engine;
    }

    if(carriage == 'hatchback') {
        carriageObj.type = 'hatchback';
        carriageObj.color = color;
        result.carriage = carriageObj;
    } else {
        carriageObj.type = 'coupe';
        carriageObj.color = color;
        result.carriage = carriageObj;
    }

    if(whells % 2 == 0) {
        whells -= 1;
        array.push(whells, whells, whells, whells);
        result.wheels = array;
    } else {
        array.push(whells, whells, whells, whells);
        result.wheels = array;
    }
    return result;

}

console.log(cars({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));