import { useEffect } from 'react';
import { generateQuote } from '../randomQuote';

function RandomQuoteComponent() {

  useEffect(() => {

    generateQuote();
  }, []); 

  return (
    <div>
      <div id="quote"></div>
      <div id="author"></div>
    </div>
  );
}

export default RandomQuoteComponent;
