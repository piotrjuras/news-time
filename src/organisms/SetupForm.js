import React, {useState, useEffect} from 'react'

import { regions, JSONlabels } from '../fetchData'; 

import { Toggler } from '../atoms/Toggler'

const SetupForm = ({setScreen, passDataToJSON, currScreenNum}) => {

    const helloTextStrings = ["Cześć", "Hello"];

    const [textIndex, setTextIndex] = useState(0)

    const [dataToJSON, setDataToJSON] = useState({})

    const [complete, setComplete] = useState(false)

     

        
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

    },[]) // eslint-disable-line

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

        (objSize !== 5 || objSize === 0) ? setComplete(false) : setComplete(true);

        

        passDataToJSON(dataToJSON)

    }
    



    if(currScreenNum === 1){

        return(
            <section id="register">
                <h1>{helloTextStrings[textIndex]}</h1>
                <p>news-reading app<br/>developed by Piotr Juras</p>


                <div className="bottom_wrapper">
                    <p>tell us something about you</p>
                    <button className="button_big" onClick={() => setScreenNum(currScreenNum+1)}>let's go!</button>
                </div>
            </section>
        )

    }

    if(currScreenNum === 2){

        return(
            <section id="register">
                <h2>dear user,</h2>
                <div className="bottom_wrapper">
                    <p style={{textAlign:"left"}}>by using this news-reading app you accept that we will store <b>coockies</b> on your device provided by our news platforms. Your informations won't be send to our servers and we use them only to predefine your default settings</p>
                    <button className="button_big" style={{marginTop: "20px"}} onClick={() => setScreenNum(currScreenNum+1)}>I'm okey with that</button>

                </div>
            </section>
        )

    }


    if(currScreenNum === 3){

        return(
            <section id="register">
                <h2>What is your nickname</h2>
                <input placeholder="nickname" id="name" onChange={(e) => dataProvided(e)} />

                <h2>What region are you interested in?</h2>

                <main className="region_select" onClick={(e) => dataProvided(e)}>
                    {regions.map((region) => (
                        <span key={region.regionCode} className="select" id={region.regionCode}>{region.regionName}</span>
                    ))}
                </main>

                <h2>Which source do you want to explore?</h2>
                <main className="category_select" onClick={(e) => dataProvided(e)}>
                    {JSONlabels.map((label) => (
                        <span key={label} id={label} className="select">{label}</span>
                    ))}
                </main>

                <h2>What we should search for?</h2>
                <input placeholder="e.g. Covid" id="search_word" onChange={(e) => dataProvided(e)} />


                <h2>Would you like to use dark mode?</h2>
                <Toggler />

                <button disabled={!complete} className="button_big" style={{marginTop: "20px"}} onClick={() => setScreenNum(currScreenNum+1)}>{complete ? "start exploring" : "fill info required"}</button>

            </section>
        )

    }
    
}


export default SetupForm;