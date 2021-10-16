import React, { useEffect, useState } from 'react';

import './ArticlePage.css';
import ArticleFooter from '../atoms/ArticleFooter';
import { language } from '../fetchData';
import Button from '../atoms/Button';
import Loader from './Loader';
import MoreArticles from '../organisms/MoreArticles'
import { useParams, useHistory } from 'react-router-dom';

import {Helmet} from "react-helmet";


const ArticlePage = ({ dataAll }) => {

    const [article, setArticle] = useState(null);

    const { title } = useParams();
    const history = useHistory();
    const articleFound = [];


    useEffect(() => {

        window.scrollTo(0,0);
        dataAll.forEach(category => {
            category.articles.forEach(item => {
                if(item.title === decodeURIComponent(title).replace(":","")){
                    articleFound.push(item)
                    setArticle(item)
                }
            })
        })

        if(articleFound.length === 0) localStorage.setItem("error", "Oops! the link you are trying to open is either outdated or it belongs to different region than yours")

    })

    const formatTitle = (title) => {
        title = title.substring(0, 30);
        title += "... - news-time";
        return title;
    }



    if(article){
        return (
            <div className = "article_wrapper">
                <Helmet>
                    <title>{formatTitle(article.title)}</title>
                </Helmet>

                <Button onClick={() => history.goBack()} type = "button_menu unhidden close"><div></div></Button>


                <div className = "article_page">
                    <div className="article_padding"></div>
                    <header style={{backgroundImage: `url(${article.urlToImage})`}}></header>
                    <main className ="article_wrapper_main">
                        <section>
                            <h1>{article.title}</h1>
                            <p>{article.description}</p>
                            <h4>{article.author}</h4>
                            <a href={article.url}>
                                <Button label={language !== "pl" ? "go to article" : "przejdź do artykułu"} />
                            </a>
                        </section>
                        <footer>
                            <ArticleFooter item = {article} date = {article.publishedAt} />
                        </footer>

                    </main>

                    <MoreArticles dataAll = {dataAll} source = {article.source.name}/>
                    <Button onClick={() => history.push("/")} label={language !== "pl" ? "go to main page" : "wróć na główną"} />


                </div>
            </div>
        )
    } else {
        return <Loader time={500} />
    }

}


export default ArticlePage;
