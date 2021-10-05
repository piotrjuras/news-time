import React from 'react';

import ArticleFooter from '../atoms/ArticleFooter'
import ArticleBody from '../atoms/ArticleBody'

import './Article.css';



const Article = ({ item, description }) => {



    return(
        <a href={item.url} target="_blank" rel="noreferrer" onClick={(e) => {
            if(!description){
                e.preventDefault()
             }
        }}>
            <article className={"news_card"} style={{ backgroundImage: `url(${item.urlToImage}), url('https://icon-library.com/images/no-image-icon/no-image-icon-20.jpg')` }}>
                <ArticleBody item = {item} description={description} />
                <ArticleFooter date = {item.publishedAt} item={item} />
            </article>
        </a>
    )

}


export default Article;
