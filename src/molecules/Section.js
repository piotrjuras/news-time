import React from 'react';

import Article from './Article'

import './Section.css';


import { pseudonim } from '../fetchData'


const Section = ( { data } ) => {

 

    return(

          <section id={data.title} className="row">

            <h1 className="section_name">hello {pseudonim},<br/>{data.title} news</h1>
            <div className="news_cards" style={sectionsStyles}>
              {data.articles.map((item, index) =>  <Article item={item} description={false} key={index}/> )}
            </div>



          </section>

    )
}



const sectionsStyles = {
  display: "flex",
  overflowY: "scroll",
}


export default Section;