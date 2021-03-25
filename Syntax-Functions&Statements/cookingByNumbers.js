function cooking(x, com1, com2, com3, com4, com5) {
     x = Number(x);

     let array = [];
     array.push(com1,com2,com3,com4,com5);

     for (let line of array) {
         if(line == 'chop') {
             x = x /2;
             console.log(x);
         } else if(line == 'dice') {
            x = Math.sqrt(x);
            console.log(x);
         } else if(line == 'spice') {
             x = x + 1;
             console.log(x);
         } else if(line == 'bake') {
             x = x*3;
             console.log(x);
         } else if(line == 'fillet') {
             x = x * 0.80;
             console.log(x.toFixed(1));
         }
     }
     

}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');