/*
Random Quote Generator
*/

/*
Colors for background.
*/

let colors = ['#1f85de', '#8f21af', '#af2143', '#edc443', '#38bbb3', '#36b55c'];

/*
Quotes with citations, to be displayed in web app.
*/

let quotes = [
  {
    quote: 'Obstacles in the path are not obstacles, they ' + '<i>are</i>' + ' the path.',
    source: '- Jane Catherine Lotter',
    profession: 'Freelance writer',
    nationality: 'American',
    lived: '1952 - 2013'
  },
  {
    quote: 'Have patience. Everything is difficult before it is easy.',
    source: '- Saadi Shirazi',
    profession: 'Poet',
    nationality: 'Iranian',
    lived: '1210 - 1291 or 1292'
  },
  {
    quote: 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.',
    source:  '- Bernard M. Baruch',
    profession: 'Businessman',
    nationality: 'American',
    lived: '1870 - 1965'
  },
  {
    quote: 'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .',
    source: '- C.S. Lewis',
    citation: 'The Four Loves',
    year: '1960',
    profession: 'Novelist',
    nationality: 'British',
    lived: '1898 - 1963'
  },
  {
    quote: 'In the practice of tolerance, one\'s enemy is the best teacher.',
    source: '- Dalai Lama',
    profession: 'Spritual Leader',
    nationality: 'Tibetan',
    lived: '1935 - present',
  }
]

console.log(quotes);

/*
Function to choose and return a quote at random.
*/

function getRandomQuote() {
  let i = Math.floor(Math.random() * quotes.length);
  return quotes[i];
}

/*
Function to choose and return a color at random.
*/

function getRandomColor () {
  let randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

/*
  Function to call the `getRandomQuote` and `getRandomColor` functions.
  Converts the object property values of the randomly chosen quote to HTML. 'Citation` and `year` properties are only included if applicable to the chosen quote.
  Finally, the 'quote-box' div is applied to the new HTML, and the chosen color is applied to the body's background.
*/

function printQuote () {
  let i = getRandomQuote();
  let color = getRandomColor();
  let HTML = '';
  
  HTML += '<p class="quote">' + i.quote + '</p>';
  HTML += '<p class="source">' + i.source; 
  if (i.citation) {
    HTML += '<span class ="citation">' + i.citation + '</span>';
  }
  if (i.year) {
    HTML += '<span class = "year">' + i.year + '</span>';
  }
  HTML += '</p>';
  HTML += '<p class="profession">' + i.profession + '</p>';
  HTML += '<p class="nationality">' + i.nationality + '</p>';
  HTML += '<p class="lived">' + i.lived + '</p>';
  
  console.log(HTML);
  
  document.getElementById('quote-box').innerHTML = HTML;
  document.body.style.backgroundColor = color;
  }

/*
  The `printQuote` function is called when the app's "Show another quote" button is clicked.
*/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
