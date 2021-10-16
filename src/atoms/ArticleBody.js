import React from 'react'

import "./ArticleBody.css"



const ArticleBody = ({ item }) => {
 
    return (

        <main className = "main_wrapper">
            <h2 className="title">{item.title}</h2>
        </main>
        
    )

}

export default ArticleBody;