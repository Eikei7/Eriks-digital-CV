// DataComponent.jsx
import { useState, useEffect } from 'react';
import { fetchData } from '../api';
import '../index.css';

const DataComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const responseData = await fetchData();
        const sortedData = responseData.sort((a, b) => b.updated_at.localeCompare(a.updated_at));
        setData(sortedData.slice(0, 6));
        setError(null);
      } catch (error) {
        setError("Failed to fetch projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
   
    getData();
  }, []);

  if (loading) {
    return (
      <div className="github-container">
        <h2 className="github-title">Loading my latest GitHub projects...</h2>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="github-container">
        <div className="github-error">
          <h2 className="github-title">Oops!</h2>
          <p>{error}</p>
          <p>Please check your connection and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="github-container">
      <h2 className="github-title">Latest GitHub projects</h2>
      
      <div className="repo-grid">
        {data?.map((repo) => (
          <div className="repo-card" key={repo.id}>
            <div className="repo-header">
              <h3 className="repo-name">{repo.name}</h3>
              <span className="repo-language" style={{
                backgroundColor: getLanguageColor(repo.language)
              }}>
                {repo.language || 'N/A'}
              </span>
            </div>
            
            <p className="repo-description">{repo.description || 'No description available'}</p>
            
            <div className="repo-footer">
              <a 
                href={repo.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="repo-link"
              >
                View on GitHub <span className="github-icon">↗</span>
              </a>
              <span className="repo-updated">
                Updated: {formatDate(repo.updated_at)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper functions
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

const getLanguageColor = (language) => {
  const colors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Python: '#3572A5',
    Java: '#b07219',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Go: '#00ADD8',
    Swift: '#F05138',
    Kotlin: '#A97BFF',
    Rust: '#DEA584',
    // Default color for other languages
    default: '#8b949e'
  };
  
  return colors[language] || colors.default;
};

export default DataComponent;