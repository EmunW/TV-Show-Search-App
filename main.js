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
        console.log(result);
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
    table.classList.add('allShows');
    table.appendChild(generateHeaders());

    const tableBody = document.createElement('tbody');
    // Currently only adds images to the table
    for(let i=0; i<result.length; i++){
        // Create a row for the table
        const row = document.createElement('tr');
        for(let j=0; j<5; j++){
            const show = result[i].show;
            // Create a cell for the row (This should be done in a nested for loop later if we want each column give different information about a show)
            const cell = document.createElement('td');
            // Create an image element to store in the cell

            // Some shows seem to have no image so we will skip those
            switch(j){
                case 0:
                    const img = document.createElement('IMG');
                    if(show.image === null) {
                        img.alt = 'NO IMAGE'
                        cell.appendChild(img);
                        break;
                    }
                    img.src = show.image.medium;
                    cell.appendChild(img);
                    break;
                case 1:
                    const title = document.createElement('text');
                    title.innerHTML = `${show.name}`;
                    cell.appendChild(title);
                    break;
                case 2:
                    const summary = document.createElement('text');
                    summary.innerHTML = show.summary;
                    cell.appendChild(summary);
                    break;
                case 3:
                    const rating = document.createElement('text');
                    if(show.rating.average !== null) {
                        rating.innerHTML = show.rating.average;
                    }
                    else rating.innerHTML = 'N/A'
                    cell.appendChild(rating);
                    break;
                case 4:
                    const status = document.createElement('text');
                    if(show.status !== null) {
                        status.innerHTML = show.status;
                    }
                    else status.innerHTML = 'N/A'
                    cell.appendChild(status);
                    console.log(status);
                    break;
            }

            row.appendChild(cell)
        }
        tableBody.appendChild(row);
    }
    table.setAttribute('border', 2);
    table.appendChild(tableBody);
    document.body.appendChild(table);
}

function generateHeaders(){
    const tableHead = document.createElement('thead');
    const hRow = document.createElement('tr');
    tableHead.appendChild(hRow);
    //Image
    const imageCell = document.createElement('td');
    const image = document.createTextNode('')
    imageCell.appendChild(image);
    hRow.appendChild(imageCell);
    //Title
    const titleCell = document.createElement('td');
    const title = document.createTextNode('Title')
    titleCell.appendChild(title);
    hRow.appendChild(titleCell);
    //Summary
    const summaryCell = document.createElement('td');
    const summary = document.createTextNode('Summary')
    summaryCell.appendChild(summary);
    hRow.appendChild(summaryCell);
    //Rating
    const ratingCell = document.createElement('td');
    const rating = document.createTextNode('Rating')
    ratingCell.appendChild(rating);
    hRow.appendChild(ratingCell);
    //Status
    const statusCell = document.createElement('td');
    const status = document.createTextNode('Status')
    statusCell.appendChild(status);
    hRow.appendChild(statusCell);
    return tableHead;
    
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