function solve() {
   let cart = document.querySelector('.shopping-cart');
   cart.addEventListener('click', onClick);
   const textArea = document.querySelector('textarea');
   const checkBtn = document.querySelector('.checkout');
   checkBtn.addEventListener('click', result);
   let sum = 0;
   let arr = [];


   function onClick(e) {
      if (e.target.tagName == 'BUTTON' && e.target.className == 'add-product') {
         const product = e.target.parentNode.parentNode;
         const name = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);
         sum += price;
         if (!arr.includes(name)) {
            arr.push(name);
         }


         textArea.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
      }
   }

   function result(e) {
      textArea.textContent += `You bought ${arr.join(', ')} for ${sum.toFixed(2)}.`;
      cart.removeEventListener('click', onClick);
      checkBtn.removeEventListener('click', result);
   }


}