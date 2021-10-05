import React, { useEffect, useState } from 'react'

import "./ArticleBody.css"



const ArticleBody = ({ item, description }) => {
 
    const [displayP, setDisplayP] = useState(false)


    useEffect(() => {
        setDisplayP(false);
    },[item])

    return (
        <main className = {`main_wrapper ${!description ? displayP ? "focus" : "" : "" }`} onClick={() => {
            if(displayP){
                setDisplayP(false)
                window.open(item.url)
            } else {
                setDisplayP(true)
            }
        }} >

            <h2 className="title">{item.title}</h2>
            {description || displayP ? 
                <div className='description'>
                    <p>{item.description}</p>
                </div>
            : null}
        </main>

    )


}

export default ArticleBody;