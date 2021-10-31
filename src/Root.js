import React, { useState, useEffect } from 'react';

import App from './views/App';
import Loader from './views/Loader';
import Setup from './views/Setup';
import Alert from './views/Alert';






import {JSONlabels, JSONlabelsPL, JSONurls, language} from './fetchData.js';


const Root = () => {


    const [dataAll, setDataAll] = useState(null);

    const [error, setError] = useState(false)

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
                    console.log(error)
                    localStorage.setItem("error", language !== "pl" ? `Oops! something went wrong: ${error}` : `Oops! coś poszło nie tak: ${error}`);
                    setError(true)
                }
            )
        }

        localStorage.getItem("error") ? setError(true) : setError(false)


    }, []);

    
    const handleData = (data, JSONlabels) => {

        data.forEach((dataSection, index) => {    
            if(language !== "pl"){
                data[index] = {...dataSection, title: JSONlabels[index]}
            } else {
                data[index] = {...dataSection, title: JSONlabelsPL[index]}
            }          
        })
        data.forEach((item) => {
            item.articles.forEach((article, index) => {
                if(article.title === null){
                    item.articles.splice(index, 1)
                }
            })
        })

        setDataAll(data)

    }



    return (

        error ? (
            <Alert text={localStorage.getItem("error")} />
        ) : (
            !localStorage.getItem("usr_settings") ? (
                <Setup />
            ) : (
                dataAll ? <App dataAll = {dataAll} /> : <Loader /> 
            )
        )

    )

}


export default Root;