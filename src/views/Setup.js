import React, {useState } from 'react'



import SetupForm from '../organisms/SetupForm'


import './Setup.css'


const Startup = () => {

    const [currentScreen, setCurrentScreen] = useState(1)

    const [dataToJSON, setDataToJSON] = useState(null)

    const passDataToJSON = (dataToJSON) => {
        setDataToJSON(dataToJSON)
    }


    const setScreen = (number) => {

        if(number === 5){
            localStorage.setItem("usr_settings", JSON.stringify(dataToJSON))
            setTimeout(() => {
                window.location.reload();
            }, 500);
        } else {
            setCurrentScreen(number)
        }

    }

    // if(window.location.pathname ==)

    return <SetupForm setScreen={setScreen} passDataToJSON={passDataToJSON} currScreenNum={currentScreen} />
    

}


export default Startup;