import React from 'react'

import '../atoms/Button.css'
import './Alert.css'


const Alert = ({ text }) => {

    const handleRestart = () => {
        localStorage.removeItem("error");

        window.location.reload(); 
    }


    return (

        <div className="alert">
            <h1 className="alert_sign">!</h1>
            <p className="alert_text">{text}</p>
            <button className="button_big" onClick={() => handleRestart()}>try again</button>
        </div>

    )
    






}

export default Alert;