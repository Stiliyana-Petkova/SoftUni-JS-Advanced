function solve() {
  let input = document.querySelector('#input');
  let output = document.querySelector('#output');
  

 let text =  input.value.split('.').filter(x => x.length > 0);
 
 while(text.length > 3) {
   let words = text.slice(0, 3);
   text = text.slice(3);
   let str = words.join('.') + '.';
   let p = document.createElement("p");
   p.textContent = str;
   output.appendChild(p);
 }
 console.log(text.length);

 if(text.length > 0) {
  let str = text.join('.') + '.';
  let p = document.createElement("p");
  p.textContent = str;
  output.appendChild(p);
 }
 
}