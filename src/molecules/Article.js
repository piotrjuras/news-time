import React from 'react';

import ArticleFooter from '../atoms/ArticleFooter'
import ArticleBody from '../atoms/ArticleBody'

import './Article.css';
import { Link, useHistory } from 'react-router-dom';



const Article = ({ item }) => {

    const history = useHistory();

    const handleArticleClick = (e) => {

        if(window.location.pathname !== "/"){
            e.preventDefault();
            history.push("/")
            setTimeout(() => {
                history.push(`/article:${encodeURIComponent(item.title)}`)
            }, 0)
        }

    }


    return(

        <Link to = {`/article:${encodeURIComponent(item.title)}`} onClick={(e) => handleArticleClick(e)} >
            <article className={"news_card"} style={{ backgroundImage: `url(${item.urlToImage})` }}>
                <ArticleBody item = {item} />
                <ArticleFooter date = {item.publishedAt} item={item} />
            </article>
        </Link>

    )

}


export default Article;
