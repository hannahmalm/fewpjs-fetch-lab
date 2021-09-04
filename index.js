
//create a new function called fetchBooks
//return "fetch" using the given API link
//then turn this API stuff into json format
//then take that json and look at another function in json format
function fetchBooks() {
  //To pass the tests, dont forget to return your fetch
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
  }
  

  //define a function to render books
  //define a constant called main with the element main
  //use a forEach loop to create a new header element, put the book name in the header, and append it to the main element
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

//add the event lister to render the DOM content - then after rendering do the fetch function
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


//example fetch
//fetch('website url')
//.then(function(response));
//console.log(response);
//return response.json();})
//.then(function(json)) {
  //console.log(json);
//});

//Use JS to send a web request to an API and receive a collection of JSON in return
//JOSN is a way to format data - language agnostic
//if you send a web request to any API or URL, it will return a JSON collection of data = tell JS to treat JSON collection as a nested object
