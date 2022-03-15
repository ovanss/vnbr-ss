import React, {useState, useContext, useEffect} from "react";

const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=fb9a01961a354bde95a89f74f155179a'
const AppContext = React.createContext();

const AppProvider = ({children})=>{
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const fetchNews = async ()=>{
    setLoading(true);
    try{
      const response = await fetch(url);
      const {articles} = await response.json();
      console.log(articles)
      setArticles(articles);
      setLoading(false);
    }catch(err){
      console.log(err);
      setLoading(false)
    }
  }

    useEffect(()=>{
      fetchNews()
    },[])

  return (
    <AppContext.Provider value={{loading, articles}}>
      {children}
    </AppContext.Provider>
  )
} 

export {AppContext, AppProvider}