import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Hero from '../organisms/Hero';
import Menu from '../organisms/Menu';
import MainBody from '../organisms/MainBody';
import SearchBody from '../organisms/SearchBody';
import ArticlePage from '../views/ArticlePage';
import Alert from '../views/Alert';

import Helmet from 'react-helmet';

import { searchWord, category, lastUpdate } from '../fetchData';

import '../views/App.css';
import Preferences from '../molecules/Preferences';



const App = ({ dataAll }) => {    


    const [dataToRender, setDataToRender] = useState(null);
    const [lastUpload, setLastUpload] = useState("");
    const [lastSearchQuery, setLastSearchQuery] = useState(searchWord);


    const sendFunc = (dataItem) => {
        setDataToRender(dataItem)
    }

    const sendQuery = (query) => {
        setLastSearchQuery(query)
    }

    useEffect(() => {

        fetch(lastUpdate, {cache: 'no-store'})
        .then((res) => res.json())
        .then((time) => setLastUpload(time))

        setDataToRender(dataAll.find(dataItem => dataItem.title === category) || dataAll[0])

    },[]) // eslint-disable-line react-hooks/exhaustive-deps


    if(dataAll && dataToRender){

        return (
            <Router basename="/news">
                <Switch>
                    <Route exact path = "/">

                        <main className="App">
                            <Helmet>
                                <title>news-time</title>
                            </Helmet>
                            <Menu data = {dataAll} lastUpload = {lastUpload} sendFunc = {sendFunc}/>
                            <Hero data = {dataToRender}/>
                            <MainBody dataToRender = {dataToRender} />
                            <SearchBody dataAll = {dataAll} searchQuery = {lastSearchQuery} sendQuery = {sendQuery}/>
                        </main>

                    </Route>
                    <Route path = "/article:title">

                        <ArticlePage dataAll = {dataAll} />

                    </Route>

                    <Route path = "/preferences">

                        <Preferences />

                    </Route>   

                    <Route>

                        <Alert text = {"Oops! error 404: page not found"} />

                    </Route> 
                </Switch>
            </Router>
        )
        
        ;
    } else {
        return null
    }


    
}



export default App;



