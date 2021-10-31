import React from 'react'
import { language } from '../fetchData';
import Article from '../molecules/Article';

const MoreArticles = ({ dataAll, source }) => {

    const articles = [];

    dataAll.forEach(category => {
        category.articles.forEach(item => {
            if(item.source.name === source){
                articles.push(item)
            }
        })
    })

    return(
        
        <section className="more_articles">
            {language !== "pl" ? <h1>see more from {source}</h1> : <h1>zobacz więcej z {source}</h1> }

            <div className="news_cards" style={sectionsStyles}>
                {articles.map((item, index) => <Article item={item} key={index+item.title}/> )}
            </div>
        </section>
        
    )
}

const sectionsStyles = {
    display: "flex",
    overflowY: "scroll",
  }

export default MoreArticles;