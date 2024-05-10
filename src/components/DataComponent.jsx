// Importing necessary dependencies and styles
import { useState, useEffect } from 'react';
import { fetchData } from '../api';
import '../index.css';

// Define a functional component named DataComponent
const DataComponent = () => {
  // Define state variables for data and error
  const [data, setData] = useState(null); // State variable to hold fetched data
  const [error, setError] = useState(null); // State variable to hold error if fetching data fails

  // useEffect hook to fetch data when component mounts
  useEffect(() => {
    // Define an asynchronous function to fetch data
    const getData = async () => {
      try {
        // Fetch data using fetchData function
        const responseData = await fetchData();
        // Sort the fetched data based on 'updated_at' property in descending order
        const sortedData = responseData.sort((a, b) => b.updated_at.localeCompare(a.updated_at));
        // Set the first 5 sorted data items into state
        setData(sortedData.slice(0, 5));
      } catch (error) {
        // If fetching data fails, set error state
        setError("Failed to fetch projects. Please try again later.");
      }
    };
     // Call getData function when component mounts (empty dependency array ensures it's only called once)
    getData();
  }, []);
  // Render component UI
  return (
    <div>
      {error && <p>Error: {error}</p>}
      {data && (
        <div className='repoList'>
          <h2 className='landingSubheader'>Below are some of my latest GitHub projects:</h2>
          <ul>
            {data.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>{repo.name}</a>
                <p className='repoText'>{repo.description}</p>
                <p className='repoText'>Language: {repo.language}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
// Export the DataComponent as the default export
export default DataComponent;
