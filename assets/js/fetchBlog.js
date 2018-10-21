fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@keith.robert.fung')
   .then((res) => res.json())
   .then((data) => {
      // Filter for actual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
      const res = data.items
      const posts = res.filter(item => item.categories.length > 0)

      function toText(node) {
         let tag = document.createElement('div')
         tag.innerHTML = node
         node = tag.innerText
         return node
      }
      function shortenText(text,startingPoint ,maxLength) {
         return text.length > maxLength?
         text.slice(startingPoint, maxLength):
         text
      }

      let output = '';
      posts.forEach((item) => {
         output += `
         <li class="blog__post">
            <a href="${item.link}">
               <img src="${item.thumbnail}" class="image main"></img>
               <div class="blog__content">
                  <div class="blog_preview">
                     <h2 class="blog__title">${item.title}</h2>
                     <p class="blog__intro">${shortenText(toText(item.content),0, 300)+ '...'}</p>
                  </div>
                  <div class="blog__info">
                        <span class="blog__date">${"Published on " + shortenText(item.pubDate,0 ,10)}</span> 
                  </div>
                  <hr>
               </div>
            <a/>
         </li>`

      })
      document.querySelector('.blog__container').innerHTML = output
})