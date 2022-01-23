import React from 'react';
import ArticleFooter from '../atoms/ArticleFooter';
import ArticleBody from '../atoms/ArticleBody';
import { Link, useHistory } from 'react-router-dom';
import './Article.css';



const Article = ({ item, index }) => {


    const history = useHistory();
    

    if(localStorage.getItem('lastUrl')){

        if(document.getElementById(`${localStorage.getItem('lastUrl')}`)){

            document.getElementById(`${localStorage.getItem('lastUrl')}`).scrollIntoView();
            localStorage.removeItem("lastUrl");
  
        }
  
    }

    const handleArticleClick = (e) => {
        
        localStorage.setItem('lastUrl', index)

        if(window.location.pathname !== "/"){
            e.preventDefault();
            history.push("/")
            setTimeout(() => {
                history.push(`/article:${encodeURIComponent(item.title)}`)
            }, 0)
        }

    }


    return(

        <Link id={index} to = {`/article:${encodeURIComponent(item.title)}`} onClick={(e) => handleArticleClick(e)} >
            <article className={"news_card"} style={{ backgroundImage: `url(${item.urlToImage})` }}>
                <ArticleBody item = {item} />
                <ArticleFooter date = {item.publishedAt} item={item} />
            </article>
        </Link>

    )

}


export default Article;
