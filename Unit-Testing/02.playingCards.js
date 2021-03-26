function solve(face, suit) {
   const suits = {
        S: '\u2660',
        D: '\u2666',
        H: '\u2665',
        C: '\u2663',
   }

   const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

   if(cards.includes(face) == false) {
       throw new Error('Error');
   } else {return `${face}${suits[suit]}`
     };

   
}

console.log(solve('A', 'S'));
console.log(solve('10', 'H'));
console.log(solve('1', 'C'));