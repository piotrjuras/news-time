import React, { useState } from 'react';
import { language } from '../fetchData';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button';
import './Menu.css';


const Menu = ( {data, sendFunc, lastUpload} ) => {


    const [menuOpen, setMenuOpen] = useState("closed");
    const [menuButton, setMenuButton] = useState("button_menu unhidden");


    const menuButtonClicked = (e) => {
        e.stopPropagation();
        menuOpen === "closed" ? setMenuOpen("opened") : setMenuOpen("closed");
        menuOpen === "closed" ? setMenuButton("button_menu unhidden close") : setMenuButton("button_menu unhidden open");
    }



    const menuItemCliked = (e) => {        
        if(e.target.nodeName === "LI"){
            data.forEach((dataItem => {
                if(dataItem.title && e.target.textContent === dataItem.title){
                    sendFunc(dataItem)
                }
            }))

            setMenuButton("button_menu unhidden open");
            setMenuOpen("closed");
            window.scrollTo(0,0);
            document.querySelector(".news_cards").scrollTo(0,0)
        }


    }

        
    return(
        <>
            <Button onClick={(e) => menuButtonClicked(e)} type = {menuButton}><div></div></Button>

            <nav className={menuOpen}>
                <h1>{ language !== "pl" ? "categories" : "kategorie" }</h1>
                <ul onClick={(e) => menuItemCliked(e)}>
                    {data.map((item, index) => (
                        <li key={index}>{item.title}</li>
                    ))}
                </ul>
                <Link to = "/preferences" ><Button label={language !== "pl" ? "my preferences" : "moje ustawienia"} /></Link>


                {language !== "pl" ? (
                    <p style={{fontSize: "var(--paragraph-font-size"}}>last news sync: {lastUpload}</p>
                ) : (
                    <p style={{fontSize: "var(--paragraph-font-size"}}>ostatnia synchronizacja: {lastUpload}</p>
                )}
            </nav>
        </>

    )

}



export default Menu;