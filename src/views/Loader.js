

import React, {useEffect} from 'react'

import './Loader.css'



const Loader = () => {


    useEffect(() => {

        const myCheck = setTimeout(() => {
            localStorage.setItem("error", "Oops! loading took longer than expected")
            window.location.reload()
        }, 10000);
        
        return () => {
            clearTimeout(myCheck)
        }

    },[])






    return (
        <div className="loading_screen">
            <div className = "dot"></div>
            <div className = "bar"></div>
        </div>
    )


}


export default Loader;