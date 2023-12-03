

    // Fetch JSON data from the provided URL
    fetch('https://raw.githubusercontent.com/JohnnySegway/results-summary-component-main/main/data.json')
    .then(response => response.json())
    .then(jsonData => {
      // Select the list items in the HTML
      const listItems = document.querySelectorAll('.table-score');

      // Loop through the JSON data and populate the HTML elements
      for (let i = 0; i < jsonData.length && i < listItems.length; i++) {
        const listItem = listItems[i];
        const categoryElement = listItem.querySelector('.category');
        const scoreElement = listItem.querySelector('.score');
        const embedElement = listItem.querySelector('embed');

        // Set the text content and embed source based on JSON data
       // Set the text content and embed source based on JSON data
       categoryElement.textContent = jsonData[i].category;
       scoreElement.textContent = jsonData[i].score;
       
       // Create a span element for the '/100' and apply the class for styling
       const scoreWrapper = document.createElement('span');
       scoreWrapper.textContent = ' / 100';
       scoreWrapper.classList.add('score-wrapper');
       
       // Append the '/100' span to the score element
       scoreElement.appendChild(scoreWrapper);

       embedElement.src = jsonData[i].icon;
      }
    })
    .catch(error => console.log('Error fetching data:', error));

