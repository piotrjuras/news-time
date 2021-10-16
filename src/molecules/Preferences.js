import React from 'react';
import { pseudonim, regionFullName, searchWord, category, language } from '../fetchData';
import { Toggler } from '../atoms/Toggler';
import { Link, useHistory } from 'react-router-dom';
import Button from '../atoms/Button';
import './Preferences.css';


const Preferences = () => {

    const history = useHistory();
    window.scroll(0,0);


    return(
        <>
        <div className="preferences_wrapper">
            <h1><b>{language !== "pl" ? "preferences:" : "ustawienia:"}</b></h1>
            <Toggler />

            {language !== "pl" ? (
                <p>your nickname is <b>{pseudonim}</b><br/>news are from region: <b>{regionFullName}</b><br/><br/>we are searching for <b>"{searchWord}"</b> in search section<br/><br/>by default we show you <b>{category}</b> section<br/><br />tap reset preferences to start from beginning</p>
            ) : (
                <p>Twój nick to <b>{pseudonim}</b><br/>newsy są z regionu: <b>{regionFullName}</b><br/><br/>wyszukujemy <b>"{searchWord}"</b> w sekcji wyszukiwania<br/><br/>domyślnie pokazyjemy Ci kategorie <b>{category}</b><br/><br />kliknij zresetuj ustawienia żeby zacząć od początku</p>
            )}

            <Button label={language !== "pl" ? "reset preferences" : "zresetuj ustawienia"} onClick={() => {
                localStorage.removeItem("usr_settings");
                history.push("/")
                window.location.reload();
            }} style={{backgroundColor: "red" }}/>
            <Link to = "/" >
                <Button type = "button_menu unhidden close"><div></div></Button>
            </Link>
        </div>
        </>
    )


}

export default Preferences