function solve(array) {

  let obj = {};
  let objBottles = {};

  for(let line of array) {
      let [juice, qty] = line.split(' => ');
      qty = Number(qty)
      if(obj[juice]) {
          obj[juice] += Number(qty);
      } else {
          obj[juice] = Number(qty);
      };

      if(obj[juice] >= 1000) {
          objBottles[juice] = 0;
      };
  };

  Object.keys(objBottles).forEach(e => {
     // if(objBottles[e] !== undefined) {
          objBottles[e] = Math.floor(obj[e] / 1000);
     // };
  });

  let keys = Object.keys(objBottles);
  for(let key of keys) {
      console.log(`${key} => ${objBottles[key]}`);
  };

}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])