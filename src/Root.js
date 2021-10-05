import React, { useState, useEffect } from 'react'

import App from './views/App'
import Loader from './views/Loader'
import Setup from './views/Setup';
import Alert from './views/Alert'




import {JSONlabels, JSONurls} from './fetchData.js';




const Root = () => {

    const [dataAll, setDataAll] = useState(null);
    const [error, setError] = useState(false);


    useEffect(() => {

        if(localStorage.getItem("usr_settings")){
            Promise.all(JSONurls.map(url => fetch(url, {cache: 'no-store'})))
            .then(
                (responses) => Promise.all(responses.map(response => response.json()))
            )
            .then(
                (data) => handleData(data, JSONlabels)
            )
            .catch(
                (error) => {
                    localStorage.setItem("error", `Oops! something went wrong: ${error}`);
                    setError(true);
                }
            )
        }

        if(localStorage.getItem("error")){
            setError(true)
        }
    }, []);

    
    const handleData = (data, JSONlabels) => {

        data.forEach((dataSection, index) => {                    
            data[index] = {...dataSection, title: JSONlabels[index]}
        })
        data.forEach((item) => {
            item.articles.forEach((article, index) => {
                if(article.title === null){
                    item.articles.splice(index, 1)
                }
            })
        })

        setDataAll(data)
        console.log(data)



    }


    return (

        !localStorage.getItem("usr_settings") ? <Setup /> :
        
        error ? <Alert text={localStorage.getItem("error")} /> : 
        
        dataAll ? <App dataAll = {dataAll} /> : <Loader />

    )

}


export default Root;