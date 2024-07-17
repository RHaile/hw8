### FBI Most Wanted List API

**HTML**
- Button that runs function in javascript when clicked
- Displa data in empty div container
- Link Axios CDN, JS file, & CSS


**JavaScript**
1. Define 'fetchWantedList()' function that fetches data from API using axios

function fetchWantedList() {
    axios.get('url')
        .then(response);
        .catch(error);
}

2. Create variables to store data and display in empty HTML container
3. Using forEach() function parse through items and append data to DOM in html elements
4. Catch error


**CSS**
-Add flexbox to container



## Biggest Struggle
Finding an API to use