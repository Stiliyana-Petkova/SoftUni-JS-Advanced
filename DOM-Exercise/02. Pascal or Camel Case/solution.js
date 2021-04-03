function solve() {
  let input = document.getElementById('text').value.toLowerCase();
  let command = document.getElementById('naming-convention').value;
  let words = input.split(' ');
    
  

  if (command == "Camel Case") {
    let words = input.split(' ');
    words = words.map(x => x[0].toUpperCase() + x.slice(1)).join('');
    words = words[0].toLowerCase() + words.slice(1);
    document.getElementById('result').textContent = words;


  } else if(command == "Pascal Case") {
    let words = input.split(' ');
    let newWord = words.map(x => x[0].toUpperCase() + x.slice(1)).join('');

    document.getElementById('result').textContent = newWord;

  } else {
      document.getElementById('result').textContent = "Error!"
  }

  
}