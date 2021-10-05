import React, { useState } from 'react';


import { Toggler } from '../atoms/Toggler'

import './Menu.css';

import { pseudonim, regionFullName, searchWord, category } from '../fetchData'


const Menu = ( {data, sendFunc, lastUpload} ) => {


    const [menuOpen, setMenuOpen] = useState("closed");
    const [menuButton, setMenuButton] = useState("menu_button");

    const [showInfo, setShowInfo] = useState(false);







    window.addEventListener("scroll", (e) => {
        if(window.pageYOffset > window.innerHeight/2){

            if(menuOpen === "opened"){
                setMenuButton("menu_button unhidden close");
            } else {
                setMenuButton("menu_button unhidden");
            }
        } else {
            setMenuButton("menu_button");
            setMenuOpen("closed");

        }

    })



    const menuButtonClicked = (e) => {

        e.stopPropagation();
        menuOpen === "closed" ? setMenuOpen("opened") : setMenuOpen("closed");
        menuOpen === "closed" ? setMenuButton("menu_button unhidden close") : setMenuButton("menu_button unhidden open");
    }



    const menuItemCliked = (e) => {        
        if(e.target.nodeName === "LI"){
            data.forEach((dataItem => {
                if(dataItem.title && e.target.textContent === dataItem.title){
                    sendFunc(dataItem)
                }
            }))

            setMenuButton("menu_button unhidden open");
            setMenuOpen("closed");
            window.scrollTo(0,0);
            document.querySelector(".news_cards").scrollTo(0,0)
        }

    }

        
    return(
        <>
            <button className={menuButton} onClick={(e) => menuButtonClicked(e)}><div></div></button>

            <nav className={menuOpen}>
                <h1>categories</h1>
                <ul onClick={(e) => menuItemCliked(e)}>
                    {!showInfo ? data.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    )): null}
                </ul>

                <div className = {showInfo ? "highlighted" : ""}>                        
                    {showInfo ? <>
                        <span>
                            <h1><b>preferences:</b></h1>
                            {showInfo ? <Toggler /> : null}
                            <p>your nickname is <b>{pseudonim}</b><br/>news are from <b>{regionFullName}</b><br/>we are searching for <b>"{searchWord}"</b> in search section<br/>by default we show you <b>"{category}"</b> section<br/><br />tap reset preferences to start from beginning</p>
                        </span>
                        <button className="button_big" style={{backgroundColor: "red"}} onClick={() => {
                            localStorage.removeItem("usr_settings");
                            window.location.reload();
                        }}>reset preferences</button>
                    </> : null }
                    <button className="button_big" onClick={() => {
                        showInfo ? setShowInfo(false) : setShowInfo(true)
                    }}>
                        {showInfo ? "ok, take me back" : "my preferences"}
                    </button>

                </div>
                <p style={{fontSize:"var(--paragraph-font-size"}}>last news sync: {lastUpload}</p>
            </nav>
        </>

    )

}



export default Menu;