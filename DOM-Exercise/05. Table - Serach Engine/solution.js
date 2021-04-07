function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      let input = document.querySelector('#searchField');
      let text = document.querySelectorAll('tbody tr td');
      let button = document.querySelector('#searchBtn');
      
      for(let line of text) {
         line.parentElement.className = '';
      }
      for (const line of Array.from(text)) {
         if(line.textContent.includes(input.value)) {
            line.parentElement.className = 'select';
         }
      }

      input.value = '';
      
   }
}