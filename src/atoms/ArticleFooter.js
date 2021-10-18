import React from 'react'


import "./ArticleFooter.css"

const correctDateFormat = ( date ) => {

    const newDate = new window.Date(date);

    const Hours = String(newDate.getHours()).padStart(2,"0");
    const Minutes = String(newDate.getMinutes()).padStart(2,"0");
    const Year = newDate.getFullYear();
    const Month = String(newDate.getMonth()+1).padStart(2,"0");
    const Day = String(newDate.getDate()).padStart(2,"0");

    return `${Year}.${Month}.${Day} ${Hours}:${Minutes}`

}


const ArticleFooter = ( {date, item} ) => {


    return (
        <div className = "bottom_wrapper">
            <p className="publishedAt">{correctDateFormat(date)}</p>
            <p className="publisher">{item.source.name}</p>
        </div>
    )


}

export default ArticleFooter;