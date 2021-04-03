let str = 'my new demo';

let words = str.split(' ');
words = words.map(x => x[0].toUpperCase() + x.slice(1)).join('');
console.log(words);

