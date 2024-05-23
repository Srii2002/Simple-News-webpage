import React, { useEffect, useState } from 'react';
import './News.css';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [quote, setQuote] = useState('');

  const placeholderImages = [
    'placeholder1.jpg',
    'placeholder2.jpg',
    'placeholder3.jpg'
  ];

  const newsQuotes = [
    "Journalism is what maintains democracy. It's the force for progressive social change. - Andrew Vachss",
    "News is what somebody somewhere wants to suppress; all the rest is advertising. - Lord Northcliffe",
    "The news is the one thing the networks can point to with pride. Everything else they do is crap, and they know it. - Fred W. Friendly",
    "Journalism is the first rough draft of history. - Philip Graham",
    "In seeking truth you have to get both sides of a story. - Walter Cronkite",
    "The duty of the journalist is to further those ends by seeking truth and providing a fair and comprehensive account of events and issues. - Society of Professional Journalists",
    "Good journalism is good business practice; good business supports great journalism. - Lachlan Murdoch"
  ];

  const fetchData = async () => {
    try {
      let response = await fetch("https://newsapi.org/v2/top-headlines?country=in&pageSize=40&apiKey=23c8b8bfc3364b91aa6b02c72c44f7ea");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      let data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    setQuote(newsQuotes[Math.floor(Math.random() * newsQuotes.length)]);
  }, []);

  return (
    <div className="mainDiv">
      <div className="quote">
        <p>{quote}</p>
      </div>
      {error ? (
        <p>Error fetching data: {error}</p>
      ) : (
        <div className="news-grid">
          {articles.map((article, index) => (
            <div className="card" key={index}>
              <img 
                src={article.urlToImage || placeholderImages[Math.floor(Math.random() * placeholderImages.length)]} 
                className="card-img-top" 
                alt={article.title || 'No Image Available'} 
              />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read more</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
