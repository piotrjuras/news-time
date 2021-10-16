import React from 'react'

import "./SearchHero.css"


const SearchHero = ({ backgroundPic }) => {


    return (
        <section className="search_section">
                <main style={{backgroundImage: `url(${backgroundPic.urlToImage})`,
                    position: "relative"
                }}> 
                    <a href={backgroundPic.url} target="_blank" rel="noreferrer">
                        <h1>{backgroundPic.title}</h1>
                    </a>
                </main>
        </section>
    )
}




export default SearchHero