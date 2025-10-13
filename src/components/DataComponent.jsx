import { useState, useEffect, useRef } from 'react';
import { fetchData } from '../api';
import '../pages/ProjectStyles.css';

const DataComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const cardRefs = useRef({});
  const boundingRefs = useRef({});

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
          <div className="repo-card-wrapper" key={repo.id}>
            <div 
              className="repo-card" 
              ref={(el) => cardRefs.current[repo.id] = el}
              onMouseLeave={() => {
                boundingRefs.current[repo.id] = null;
                const card = cardRefs.current[repo.id];
                if (card) {
                  card.style.setProperty("--x-rotation", `0deg`);
                  card.style.setProperty("--y-rotation", `0deg`);
                }
              }}
              onMouseEnter={(ev) => {
                boundingRefs.current[repo.id] = ev.currentTarget.getBoundingClientRect();
              }}
              onMouseMove={(ev) => {
                const bounding = boundingRefs.current[repo.id];
                if (!bounding) return;
                
                const x = ev.clientX - bounding.left;
                const y = ev.clientY - bounding.top;
                const xPercentage = x / bounding.width;
                const yPercentage = y / bounding.height;
                const xRotation = (xPercentage - 0.5) * 20;
                const yRotation = (0.5 - yPercentage) * 20;
                
                ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
                ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
                ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
                ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
              }}
            >
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
              
              <div className="card-shine" />
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
    default: '#8b949e'
  };
  
  return colors[language] || colors.default;
};

export default DataComponent;