import React, { useState, useEffect } from 'react';
import { fetchData } from '../api';
import '../index.css';

const DataComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await fetchData();
        setData(responseData);
      } catch (error) {
        setError(error);
      }
    };
    
    getData();
  }, []);

  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div className='repoList'>
          <h2 className='landingSubheader'>Here are some of my latest GitHub projects:</h2>
            <ul>
                {data.map((repo) => (
                    <li key={repo.id}>
                    <a href={repo.html_url} target='blank'>{repo.name}</a>
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
