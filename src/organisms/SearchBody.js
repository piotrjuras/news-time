import React, {useState, useEffect} from 'react'
import Search from '../molecules/Search'



import './SearchBody.css'




const SearchBody = ({ dataAll, searchQuery, foundedArray}) => {


    const [query, setQuery] = useState(searchQuery);

    const changeInput = (e) => {

        e.currentTarget.value ? setQuery(e.currentTarget.value) : setQuery(null)
            
    }

    useEffect(() => {
        setQuery(searchQuery)
    },[searchQuery]) // eslint-disable-line



    return (

        <div className="input_wrapper">
            <input type="search" onChange={(e) => changeInput(e)} placeholder="Search News"></input>
            {query ? <h1>search results for "{query}"</h1> : null }

            <Search dataAll = {dataAll} searchQuery = {query} />
        </div>

    )


}


export default SearchBody;