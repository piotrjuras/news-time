import React from 'react';

import Article from './Article';

import './Section.css';


import { pseudonim, language } from '../fetchData'


const Section = ( { data } ) => {


    return(

          <section id={data.title} className="row">

            {language !== "pl" ? (
              <h1 className="section_name">hello {pseudonim},<br/>{data.title} for you</h1>
            ) : (
              <h1 className="section_name">cześć {pseudonim},<br/>{data.title} dla Ciebie</h1>
            )}
            
            <div className="news_cards" style={sectionsStyles}>
              {data.articles.map((item, index) => <Article item={item} key={index+item.title}/> )}
            </div>



          </section>

    )
}



const sectionsStyles = {
  display: "flex",
  overflowY: "scroll",
}


export default Section;