import React from 'react';

import ArticleFooter from '../atoms/ArticleFooter'
import ArticleBody from '../atoms/ArticleBody'

import './Article.css';
import { Link } from 'react-router-dom';



const Article = ({ item }) => {


    return(

        <Link to = {`/article:${encodeURIComponent(item.title)}`} rel="noreferrer" >
            <article className={"news_card"} style={{ backgroundImage: `url(${item.urlToImage})` }}>
                <ArticleBody item = {item} />
                <ArticleFooter date = {item.publishedAt} item={item} />
            </article>
        </Link>

    )

}


export default Article;
