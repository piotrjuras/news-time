import React, {useState, useEffect} from 'react';
import { language } from '../fetchData';
import Search from '../molecules/Search';
import './SearchBody.css';




const SearchBody = ({ dataAll, searchQuery, sendQuery}) => {


    const [query, setQuery] = useState(searchQuery);

    const changeInput = (e) => {

        e.currentTarget.value ? sendQuery(e.currentTarget.value) : sendQuery(null)
        e.currentTarget.value ? setQuery(e.currentTarget.value) : setQuery(null)

    }

    useEffect(() => {
        setQuery(searchQuery)
    },[searchQuery]) // eslint-disable-line



    return (

        <div className="input_wrapper">
            <input type="search" onChange={(e) => changeInput(e)} placeholder={language !== "pl" ? "Search" : "Szukaj"}></input>

            {language !== "pl" ? (
                query ? <h1>search results for "{query}"</h1> : null
            ) : (
                query ? <h1>wyniki wyszukiwania dla "{query}"</h1> : null
            )}
            <Search dataAll = {dataAll} searchQuery = {query} />
        </div>

    )


}


export default SearchBody;