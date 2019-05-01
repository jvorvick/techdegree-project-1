/*
Random Quote Generator
*/


/*
Quotes with citations, to be displayed in web app.
*/
let quotes = [
  {
    quote: 'Obstacles in the path are not obstacles, they ' + '<i>are</i>' + ' the path.',
    source: '- Jane Catherine Lotter'
  },
  {
    quote: 'Have patience. Everything is difficult before it is easy.',
    source: '- Saadi'
  },
  {
    quote: 'Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.',
    source:  '- Bernard M. Baruch'
  },
  {
    quote: 'Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .',
    source: '- C.S. Lewis',
    citation: 'The Four Loves',
    year: '1960'
  },
  {
    quote: 'In the practice of tolerance, one\'s enemy is the best teacher.',
    source: '- Dalai Lama'
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
  Function to call the `getRandomQuote` function.
  Converts the object property values of the randomly chosen quote to HTML. 'Citation` and `year` properties are only included if applicable to the chosen quote.
  Finally, the 'quote-box' div is applied to the new HTML.
*/

function printQuote () {
  let i = getRandomQuote();
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
  console.log(HTML);
  document.getElementById('quote-box').innerHTML = HTML;
  }

/*
  The `printQuote` function is called when the app's "Show another quote" button is clicked.
*/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
