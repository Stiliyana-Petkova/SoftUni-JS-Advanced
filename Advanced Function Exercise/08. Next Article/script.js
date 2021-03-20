function getArticleGenerator(articles) {
   let input = document.querySelector('#content');
    

    return () => {
        if(articles.length > 0) {
        let art = document.createElement('article');
        art.textContent = articles.shift();
        input.appendChild(art);
    
    }
 }
}
