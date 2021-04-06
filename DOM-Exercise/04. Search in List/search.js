function search() {
   let input = document.querySelector('#searchText');
   let towns = document.querySelector('#towns');
   let result = document.querySelector('#result');
   let count = 0;

   for (const town of Array.from(towns.children)) {
   
      if(town.textContent.includes(input.value)) {
         count++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      
      }
   }

   result.textContent = `${count} matches found`;
}
