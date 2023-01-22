const fetchMediumPosts = () =>
  fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@keith.robert.fung"
  )
    .then((res) => res.json())
    .then((data) => {
      // Filter for actual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
      const res = data.items;
      const posts = res.filter((item: any) => item.categories.length > 0);
      return posts;
    });

const fetchInfernoredPosts = () =>
  fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://blog.infernored.com/rss/&api_key=bhfaxbh5i4brvkqx0cudih5tb5jvk9nnkrns3fv2&count=100"
  )
    .then((res) => res.json())
    .then((data) => {
      const res = data.items;
      const posts = res.filter((item: any) => item.author === "Keith Fung");
      return posts;
    });

const toText = (node: any) => {
  let tag = document.createElement("div");
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
};

const shortenText = (
  text: string,
  startingPoint: number,
  maxLength: number
) => {
  return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
};

const convertToMarkup = (posts: any[]) => {
  let output = "";
  posts.forEach((item) => {
    output += `
      <li class="blog__post">
         <a href="${item.link}">
            <img src="${item.thumbnail}" class="image main"></img>
            <div class="blog__content">
               <div class="blog_preview">
                  <h2 class="blog__title">${item.title}</h2>
                  <p class="blog__intro">${
                    shortenText(toText(item.content), 0, 300) + "..."
                  }</p>
               </div>
               <div class="blog__info">
                     <span class="blog__date">${
                       "Published on " + shortenText(item.pubDate, 0, 10)
                     }</span> 
               </div>
               <hr>
            </div>
         <a/>
      </li>`;
  });
  return output;
};

async function getPosts() {
  const infernoredPosts = await fetchInfernoredPosts();
  const mediumPosts = await fetchMediumPosts();
  const posts = [...infernoredPosts, ...mediumPosts];
  const markup = convertToMarkup(posts);
  const blog = document.querySelector(".blog__container");
  if (blog) {
    blog.innerHTML = markup;
  }
}

getPosts();
