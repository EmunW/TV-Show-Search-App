//Google Calander
//change color of blocks even in the same category
//add images maybe?

//search bar to search TV show/ movie
//display rating, desc

//


// const url = 'https://transloc-api-1-2.p.rapidapi.com/agencies.json?callback=call&geo_area=35.80176%2C-78.64347%7C35.78061%2C-78.68218&agencies=12';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2d411c4c3bmsh537300b59f9b0cbp1538c9jsnc35496b21e13',
// 		'X-RapidAPI-Host': 'transloc-api-1-2.p.rapidapi.com'
// 	}
// };
const form = document.querySelector('#searchShows');
form.addEventListener('submit', async function (e){
    try{
        // Need 'preventDefault' to prevent a form from doing its default function of sending its input to the url
        e.preventDefault();
        // 'elements' is a property of any form that stores all form controls as an 'HTMLFormControlsCollection'
        // In this case we are looking for the 'q' value because we defined 'q' as the name of our input text in the html
        const searchTerm = form.elements.q.value;
        // Use a GET request to find shows that contain the words in 'searchTerm' and store them in result as an array
        const result = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`).then((data) => data.json());
        // 'result[0]' is the first show in the array
        console.log(result[0]);
        // Remove the previous shows when doing a new search
        if(document.querySelector('.allShows')){
            document.querySelector('.allShows').remove();
        }
        generateTable(result);
    }
    catch(e){
        console.log("error: " + e);
    }
})

// Make a table of the shows we found???
function generateTable(result){
    const table = document.createElement('table');
    table.classList.add('allShows')
    const tableBody = document.createElement('tbody');

    // Currently only adds images to the table
    for(let i=0; i<result.length; i++){
        // Create a row for the table
        const row = document.createElement('tr');
        // Create a cell for the row (This should be done in a nested for loop later if we want each column give different information about a show)
        const cell = document.createElement('td');
        // Create an image element to store in the cell
        const img = document.createElement('IMG');

        // Some shows seem to have no image so we will skip those
        if(result[i].show.image !== null) img.src = result[i].show.image.medium;

        tableBody.appendChild(row);
        row.appendChild(cell)
        cell.appendChild(img);
    }
    table.setAttribute('border', 2);
    table.appendChild(tableBody);
    document.body.appendChild(table);
}

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }



// fetch('https://api.spotify.com/authorize', {
//     client_id: '8947edd9ffb542d6bf1191ebda1917df',
//     response_type: 'code',
//     redirect_uri: 'http://localhost:3000',
    
// })



//Rapid API ty for sp

// async function fetchData() {

// }


// const url = 'https://calendarevents.p.rapidapi.com/calendar/a212edcb509733e73dca4ef55f447980c6b2b5db055aaa46bf3fda05f3c6e452@group.calendar.google.com/2';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '2d411c4c3bmsh537300b59f9b0cbp1538c9jsnc35496b21e13',
// 		'X-RapidAPI-Host': 'calendarevents.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }