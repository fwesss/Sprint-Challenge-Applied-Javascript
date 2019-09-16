// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

(async () => {
  const cards = [];

  try {
    const response = await axios.get('https://lambda-times-backend.herokuapp.com/articles');
    const { articles } = response.data;

    Object.keys(articles).forEach((topic) => {
      articles[topic].forEach((article) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('category', `${topic}`);

        const headline = document.createElement('div');
        headline.className = 'headline';
        headline.textContent = article.headline;
        card.appendChild(headline);

        const author = document.createElement('div');
        author.className = 'author';
        card.appendChild(author);

        const cardImageContainer = document.createElement('div');
        cardImageContainer.className = 'img-container';
        author.appendChild(cardImageContainer);

        const cardImage = document.createElement('img');
        cardImage.src = article.authorPhoto;
        cardImageContainer.appendChild(cardImage);

        const authorName = document.createElement('span');
        authorName.textContent = `By ${article.authorName}`;
        author.appendChild(authorName);

        cards.push(card);
      });
    });
  } catch (e) {
    console.log(e);
  } finally {
    cards.forEach((card) => {
      document.querySelector('.cards-container').appendChild(card);
    });
  }
})();
