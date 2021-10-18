import React, {useState, useEffect} from 'react'

import { regions, JSONlabels, JSONlabelsPL } from '../fetchData'; 

import { Toggler } from '../atoms/Toggler'
import Button from '../atoms/Button'


const SetupForm = ({setScreen, passDataToJSON, currScreenNum}) => {

    const helloTextStrings = [["Ustaw", "język"], ["Select", "language"]];

    const [textIndex, setTextIndex] = useState(0)

    const [dataToJSON, setDataToJSON] = useState({})

    const [language, setLanguage] = useState("en")

    const [complete, setComplete] = useState(false)

    const [articleProvided, setArticleProvided] = useState(false)
    
        
    useEffect(() => {

        if(currScreenNum === 1) {
            let index=0;
            setInterval(() => {
                if(helloTextStrings.length-1 <= index){
                    index=0;
                } else {
                    ++index;
                }
                setTextIndex(index)
            }, 2500)
        }


        console.log(window.location.pathname.slice(0, 8))

        if(window.location.pathname.length > 20){
            setArticleProvided(true)
        }



    },[]) // eslint-disable-line

    useEffect(() => {
        setLanguage(dataToJSON.language)
    },[dataToJSON.language])

    const setScreenNum = (num) => {
        setScreen(num)
    }


    const dataProvided = (e) => {

        let dataObj = {};

        if(e.target.nodeName === "INPUT"){
            if(e.target.id === "name"){
                dataObj['pseudonim'] = e.target.value
            }
            if(e.target.id === "search_word"){
                dataObj['searchWord'] = e.target.value
            }
        }


        if(e.target.id){

            for(let child of e.currentTarget.children){
                if(child.id === e.target.id){
                    child.className = "select selected";
                    // regionValue = e.target.id
                    if(e.currentTarget.className === "region_select"){
                        dataObj['region'] = e.target.id;
                        dataObj['regionFullName'] = e.target.textContent;
                        
                    }
                    if(e.currentTarget.className === "category_select"){
                        dataObj['category'] = e.target.id
                    }
                    if(e.currentTarget.className === "language_select"){
                        
                        dataObj['language'] = e.target.id;
                        dataObj['languageFullName'] = e.target.textContent;

                        setLanguage(e.target.id)

                    }

                } else {
                    child.className = "select";
                }
            }

        }

        Object.assign(dataToJSON, dataObj)

        setDataToJSON(dataToJSON)


        let objSize=0;
        for(let key in dataToJSON){
            if(dataToJSON[key] !== ""){
                objSize++;
            }
        }

        (objSize !== 7 || objSize === 0) ? setComplete(false) : setComplete(true);
        

        passDataToJSON(dataToJSON)

    }
    



    if(currScreenNum === 1){

        return(
            <section id="register">

                <h1>{helloTextStrings[textIndex][0]}<br/>{helloTextStrings[textIndex][1]}</h1>

                
                <main className="language_select" onClick={(e) => dataProvided(e)}>
                    <span className="select" id="en">English</span>
                    <span className="select" id="pl">Polski</span>
                </main>
                {articleProvided ? <p>{language !== "pl" ? "top open this article you must setup your preferences" : "aby otworzyć ten link musisz ustawić swoje preferencje"}</p> : null}


                { dataToJSON.language ? <Button onClick={() => setScreenNum(currScreenNum+1)} label = {language !== "pl" ? `set ${dataToJSON.languageFullName} language` : `ustaw język ${dataToJSON.languageFullName}` } style={{marginTop: "20px"}} /> : null }

                
            </section>
        )

    }


    if(currScreenNum === 2){

        return(
            <section id="register">
                <div className="bottom_wrapper">
                { language !== "pl" ? (
                        <>
                        <h2>Hello,</h2>
                        <p style={{textAlign:"left"}}>news-time made by Piotr Juras is news-reading-app. You can use it to read and search for latest news provided from all over the world. <br/><br/>To start you must tell what you are interested in</p>
                        </>
                    ) : (
                        <>
                        <h2>Cześć,</h2>
                        <p style={{textAlign:"left"}}>news-time stworzona przez Piotr Juras. To aplikacja służąca do czytania i szukania najnowszych informacji dostarczanych z całego świata.  <br/><br/>Aby zacząć musisz powiedzieć co Cię interesuje</p>
                        </>
                    ) }

                <Button onClick={() => setScreenNum(currScreenNum+1)} label = {language !== "pl" ? "Ok, next" : "Ok, dalej" } style={{marginTop: "20px"}} />

                </div>
            </section>
        )

    }






    if(currScreenNum === 3){

        return(
            <section id="register">

                <div className="bottom_wrapper">
                    <h2>Cookies...</h2>
                    { language !== "pl" ? (
                        <p style={{textAlign:"left"}}>by using this news-reading app you accept that we will store <b>cookies</b> on your device provided by our news platforms. Your data won't be sent to our servers and we use them only locally to predefine your default settings</p>
                    ) : (
                        <p style={{textAlign:"left"}}>używając tej aplikacji, zgadzasz się, że będziemy przechowywać pliki <b>cookies</b> na Twoim urządzeniu dostarczane przez portale infomacyjne. Twoje dane nie będą wysyłane do naszych serwerów i będziemy ich używać tylko lokalnie do zapisania domyślnych ustawień</p>
                    ) }

                    <Button onClick={() => setScreenNum(currScreenNum+1)} label = {language !== "pl" ? "I'm okay with that" : "Rozumiem, dobrze"} style={{marginTop: "20px"}} />

                </div>
            </section>
        )

    }


    if(currScreenNum === 4){

        return(
            
            <section id="register">
                { language !== "pl" ? <h2>What is your nickname?</h2> : <h2>Jak jest Twój nick?</h2> }
                <input placeholder="nick" id="name" onChange={(e) => dataProvided(e)} />
                { language !== "pl" ? <h2>What region are you interested in?</h2> : <h2>Jaki region Cię interesuje?</h2> }

                <main className="region_select" onClick={(e) => dataProvided(e)}>
                    {regions.map((region) => (
                        <span key={region.regionCode} className="select" id={region.regionCode}>{region.regionName}</span>
                    ))}
                </main>

                { language !== "pl" ? <h2>Which source do you want to explore?</h2> : <h2>Jakie źródło chcesz eksplorować?</h2> }

                <main className="category_select" onClick={(e) => dataProvided(e)}>
                    {language !== "pl" ? 
                    JSONlabels.map((label) => (
                        <span key={label} id={label} className="select">{label}</span>
                    )) : 
                    JSONlabelsPL.map((label) => (
                        <span key={label} id={label} className="select">{label}</span>
                    ))
                    }
                </main>

                { language !== "pl" ? <h2>What we should search for?</h2> : <h2>Czego powinniśmy szukać?</h2> }

                <input placeholder={language !== "pl" ? "one word e.g. Covid" : "jedno słowo n.p. Covid" } id="search_word" onChange={(e) => dataProvided(e)} />

                { language !== "pl" ? <h2>Would you like to use dark mode?</h2> : <h2>Chcesz używać trybu ciemnego?</h2> }
                <Toggler />


                <Button disabled={!complete} onClick={() => setScreenNum(currScreenNum+1)} label = {language !== "pl" ? complete ? "start reading" : "fill info required" : complete ? "zacznij czytać" : "wypełnij pola" } style={{marginTop: "20px"}} />

            </section>
        )

    }
    
}


export default SetupForm;