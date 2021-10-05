import React, { useEffect, useState } from 'react';

import Hero from '../organisms/Hero';
import Menu from '../organisms/Menu';
import MainBody from '../organisms/MainBody';
import SearchBody from '../organisms/SearchBody';




import { searchWord, category } from '../fetchData';

import '../views/App.css';





const App = ({ dataAll }) => {    


    const [dataToRender, setDataToRender] = useState(null);

    
    const [lastUpload, setLastUpload] = useState("");




    const sendFunc = (dataItem) => {
        setDataToRender(dataItem)
    }

    useEffect(() => {

        fetch("./jsonArticles/lastUpload.json", {cache: 'no-store'})
        .then((res) => res.json())
        .then((time) => setLastUpload(time))


        setDataToRender(dataAll.find(dataItem => dataItem.title === category) || dataAll[0])






    },[]) // eslint-disable-line react-hooks/exhaustive-deps


    if(dataAll && dataToRender){

        return (
            <main className="App">

                <Menu data = {dataAll} lastUpload={lastUpload} sendFunc={sendFunc}/>
                <Hero data = {dataToRender}/>

                <MainBody dataToRender = {dataToRender} />

                <SearchBody dataAll = {dataAll} searchQuery = {searchWord}/>

            </main>
        );
    } else {
        return null
    }


    
}



export default App;



