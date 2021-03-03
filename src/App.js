import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';

function App() {

  const [articles, setArticles] = useState([]);

  useEffect(() =>{
    const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=3bb8704cfe194767b1653a9999abd6a3';
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  },[])
  return (
    <div className="Container">
      <h2>Headlines: {articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
