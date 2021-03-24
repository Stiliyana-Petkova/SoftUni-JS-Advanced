function solve(input) {
    
    let array = [];

    for (let line of input) {
         let [name, level, items] = line.split(' / ');
          level = Number(level);
          items = items ? items.split(', ') : [];
          array.push({name, level, items})
        
        
    }
    console.log(JSON.stringify(array));
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);
solve(['Jake / 1000 / Gauss, HolidayGrenade']);