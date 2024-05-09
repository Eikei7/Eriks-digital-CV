import { useState, useEffect } from 'react';
import { fetchData } from '../api';
import '../index.css';

const DataComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await fetchData();
        const sortedData = responseData.sort((a, b) => b.updated_at.localeCompare(a.updated_at));
        setData(sortedData.slice(0, 5));
      } catch (error) {
        setError("Failed to fetch projects. Please try again later.");
      }
    };
    
    getData();
  }, []);

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

export default DataComponent;
