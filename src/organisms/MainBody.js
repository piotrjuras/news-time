import React from 'react';
import Section from '../molecules/Section';
import "./MainBody.css";

const MainBody = ( {dataToRender, header} ) => {


    return (
        <div className="main_body">
            
            <header>
                <h1 className="app_name"><div className='icon-scroll'></div></h1>
            </header>

            <Section data = {dataToRender} key={dataToRender.articles.id}/>

        </div>
    )

}


export default MainBody;