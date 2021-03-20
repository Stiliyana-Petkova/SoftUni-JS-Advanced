function solution() {

  const stock = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  }

  const recipes = {
    apple: {protein: 0, carbohydrate: 1, fat: 0, flavour: 2},
    lemonade: {protein: 0, carbohydrate: 10, fat: 0, flavour: 20},
    burger: {protein: 0, carbohydrate: 5, fat: 7, flavour: 3},
    eggs: {protein: 5, carbohydrate: 0, fat: 1, flavour: 1},
    turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
  }

function restock(array) {
     microelement = array[0].toLowerCase();
     qty = Number(array[1]);
    stock[microelement] += Number(qty);
    return `Success`;
  }


  function prepare(array) {
    let dish = array[0].toLowerCase();
      qty = Number(array[1]);
    let result = '';

    if(qty * recipes[dish]['protein'] > stock['protein']) {
      result = `Error: not enough protein in stock`;

    } else if(qty * recipes[dish]['carbohydrate'] > stock['carbohydrate']){
      result = `Error: not enough carbohydrate in stock`;

    } else if(qty * recipes[dish]['fat'] > stock['fat']) {
      result = `Error: not enough fat in stock`;

    }else if(qty * recipes[dish]['flavour'] > stock['flavour']) {
      result = `Error: not enough flavour in stock`;

    } else {
      result = `Success`;
      stock['protein'] -= qty * recipes[dish]['protein'];
      stock['carbohydrate'] -= qty * recipes[dish]['carbohydrate'];
      stock['fat'] -= qty * recipes[dish]['fat'];
      stock['flavour'] -= qty * recipes[dish]['flavour'];

    
    }
    return result;
  }

  function report() {
    return `protein=${stock['protein']} carbohydrate=${stock['carbohydrate']} fat=${stock['fat']} flavour=${stock['flavour']}`
  }

  return function solve(input) {
    input = input.split(' ');
    let action = input.shift();
    
    if(action == 'restock') {
        return restock(input);
    } else if (action == 'prepare') {
        return prepare(input);
    } else {
        return report(); 
    }
 
  }


}
let manager = solution();
console.log(manager("restock carbohydrate 10"));  
console.log(manager("restock flavour 10")); 
console.log(manager("restock flavour 10"));
console.log(manager("restock fat 10")); 
console.log(manager("prepare burger 1")); 
console.log(manager("report")); 


// • Apple - made with 1 carb and 2 flavour
// • Lemonade - made with 10 carb and 20 flavour
// • Burger - made with 5 carb, 7 fat and 3 flavour
// • Eggs - made with 5 protein, 1 fat and 1 flavour
// • Turkey - made with 10 protein, 10 carb, 10 fat and 10 flavour
