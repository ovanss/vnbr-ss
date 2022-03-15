import { Table, TableHead, TableRow , TableHeader} from 'carbon-components-react';
import React, {useContext} from 'react';
import './App.css';
import {AppContext} from './context';

function App() {
  const headers = ['Name', 'Rule', 'Status', 'Other', 'Example'];
  const {articles, loading} = useContext(AppContext);
console.log("🙌🙌", articles, loading)
if(loading){
  return 'loading....';
}
if(articles.length < 1){
 <h2>No articles</h2>
}
 
  return (
    <div>
    {articles.map(article=>(
      <p>{article.title} <b>{article.author}</b></p>
    ))}
    </div>
  );
}

export default App;
