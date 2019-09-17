// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

(async () => {
  const tabs = [];

  try {
    const response = await axios.get('https://lambda-times-backend.herokuapp.com/topics');
    response.data.topics.forEach((topic) => {
      const tab = document.createElement('div');
      tab.className = 'tab';
      tab.textContent = topic;

      tab.addEventListener('click', () => {
        document.querySelectorAll('.card').forEach((card) => {
          let category = topic;
          if (topic === 'node.js') {
            category = 'node';
          }

          if (card.getAttribute('category') !== category) {
            card.style.display = 'none';
            card.classList.remove('fade');
          } else {
            card.style.display = 'flex';
            card.classList.add('fade');
          }
        });
      });

      tabs.push(tab);
    });
  } catch (e) {
    console.log(e);
  } finally {
    tabs.forEach((tab) => {
      document.querySelector('.topics').appendChild(tab);
    });
  }
})();
