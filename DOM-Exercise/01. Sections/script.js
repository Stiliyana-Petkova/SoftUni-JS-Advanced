function create(words) {

   const result = document.querySelector('#content');

   for (const word of words) {
      const div = document.createElement('div');
      div.addEventListener('click', onClick);
      const p = document.createElement('p');
      p.style.display = 'none';
      p.textContent = word;
      div.appendChild(p);

      result.appendChild(div);


      function onClick(e) {
         p.style.display = 'block';
      }
   }

}