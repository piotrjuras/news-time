import React, { useEffect, useState } from 'react';

import './Hero.css';





const Hero = ( {data} ) => {

    const [offset, setOffset] = useState(1);
    const [opacity, setOpacity] = useState(1);
    const [render, setRender] = useState(true);


    useEffect(() =>{

        const heroUpdate = () => {
            setOffset(1 - ( window.pageYOffset/window.innerHeight/10))
            setOpacity(1 - ( window.pageYOffset/window.innerHeight))
    
            setOffset(1 - ( window.pageYOffset/window.innerHeight/10))
            setOpacity(1 - ( window.pageYOffset/window.innerHeight))

            window.pageYOffset > window.innerHeight ? setRender(false) : setRender(true)
        }
        
        window.addEventListener("scroll", heroUpdate)

        return () => {
            window.removeEventListener("scroll", heroUpdate)
        }

    }, [])



    return(
            <>
            <div style={{height: "calc(100vh - 80px"}}></div>

            {render ? (                
                <main className="hero_wrapper" 
                    style={{backgroundImage: `url(${data.articles[0].urlToImage})`, 
                    transform: `scale(${offset}) translateY(${(100 - offset*offset*offset*100)}px)`, 
                    opacity: opacity,
                    borderRadius: 100 - offset*offset*offset*100
                }}>
                    <a href={data.articles[0].url} target="_blank" rel="noreferrer">
                        <h1 className="hero_h1">{data.articles[0].title}</h1>
                    </a>
                </main>
                ) : null
            }
            </>
    )



}



export default Hero;