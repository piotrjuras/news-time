import React from 'react';
import Button from '../atoms/Button';
import './Alert.css';
import { language } from '../fetchData';
import PropTypes from 'prop-types';


const Alert = ({ text }) => {

    const handleRestart = () => {
        localStorage.removeItem("error");
        window.location.pathname = "/news";
    }


    return (

        <div className="alert">
            <h1 className="alert_sign">!</h1>
            <p className="alert_text">{text}</p>
            <Button onClick={() => handleRestart()} label={language !== "pl" ? "try again" : "spróbuj ponownie"} />
        </div>

    )
}

Alert.defaultProps = {
    text: language !== "pl" ? "Oops! Something went wrong" : "Oops! Coś poszło nie tak"
}

Alert.propTypes = {
    text: PropTypes.string,
}

export default Alert;