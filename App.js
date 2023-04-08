import React from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'

const quoteData= [
{ text: "Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you're climbing it.", author: "J.D. Salinger" },
{ text: "Only the very weak-minded refuse to be influenced by literature and poetry.", author: "Cassandra Clare" },
{ text: "Music expresses that which cannot be put into words and that which cannot remain silent", author: "Victor hugo" },
{ text: "Always remember, your focus determines your reality.", author: "F. Scott Fitzgerald" },
{ text: "Stories of imagination tend to upset those without one.", author: "Terry Pratchett" },
];


const QuoteBox = ({ quote, handleNewQuote }) => (
  <div id="quote-box">
    <p id="text">{quote.text}</p>
    <h2 id="author">{quote.author}</h2>
    <div class="actions">
      <button
        id="new-quote"
        class="button"
        onClick={handleNewQuote}
        >
        New Quote
      </button>
      <a
        href="https://twitter.com/intent/tweet"
        id="tweet-quote"
        target="_blank"
        >
        Tweet
      </a>        
      </div>
        </div>
);

const getRandomIndex = () =>
Math.round(Math.random() * ((quoteData.length -1) - 0) + 0);

const App = () => {
  const [quote, setQuote] = React.useState(quoteData[getRandomIndex()])
  const handleNewQuote= () => {
  setQuote(quoteData[getRandomIndex()])    
    }
  return (
  <div class="main">
    <QuoteBox quote={quote} handleNewQuote={handleNewQuote} />
    </div>
  )
  }

ReactDOM.render(<App />, document.querySelector("#app"))