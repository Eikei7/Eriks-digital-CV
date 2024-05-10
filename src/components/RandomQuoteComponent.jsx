// Importing necessary dependencies
import { useEffect } from 'react';
import { generateQuote } from '../randomQuote';

// Define a functional component named RandomQuoteComponent
function RandomQuoteComponent() {
  // useEffect hook to perform side effects when component mounts
  useEffect(() => {
    // Call the generateQuote function to generate a random quote
    generateQuote();
  }, []); // Empty dependency array ensures the effect is only run once, when the component mounts

  // Render component UI
  return (
    <div>
      <div id="quote"></div>
      <div id="author"></div>
    </div>
  );
}
// Export the RandomQuoteComponent as the default export
export default RandomQuoteComponent;
