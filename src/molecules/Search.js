import React, {useState, useEffect} from "react"
import SearchHero from "./SearchHero";
import Article from "./Article"



const Search = ({ dataAll, searchQuery }) => {



    const foundedArray = [];
    const searchQueryRegExp = RegExp(searchQuery,"ig")

    dataAll.forEach((dataSection, sectionIndex) => {
        dataSection.articles.forEach((article, articleIndex) => {              
            const articleText = String(`${article.title} ${article.description}`);
            const founded = articleText.match(searchQueryRegExp)
            if(founded){
                foundedArray.push(dataAll[sectionIndex].articles[articleIndex])
            }
        })
    })



    const [itemsToRender, setItemsToRender] = useState([])
    const [noMore, setNoMore] = useState(false)
    const [loadMore, setLoadMore] = useState(false);




    useEffect(() => {

        setTimeout(() => {
            setItemsToRender([])
            setLoadMore(true);
            setNoMore(false);
        }, 0);

    },[searchQuery])


    useEffect(() => {

        if(loadMore) renderNewArticles()

    }, [loadMore, searchQuery]); // eslint-disable-line


    document.addEventListener("scroll", (e) => {

        if(document.body.clientHeight < window.scrollY + window.innerHeight+50){
            setLoadMore(true);
        }
        
    })



    const renderNewArticles = () => {

        setTimeout(() => {
            for(let i=0; i<6; i++){
                const itemsToPush = foundedArray[itemsToRender.length]
                if(itemsToPush){
                    itemsToRender.push(itemsToPush)
                } else {
                    setNoMore(true)
                }
              }
            setLoadMore(false)
        }, 0);

    }



    if(foundedArray.length && searchQuery !== null){

        return (
            <>
            { itemsToRender[0] ? <SearchHero backgroundPic={itemsToRender[0]}/> : null }
            
            <div className="results">
                
                {itemsToRender.map((item, index) => {         
                    return <Article item = {item} description={true} key={index} />
                })}

            </div>

            {noMore ? <h3>No more results</h3> : <h3>loading...</h3>}

            </>
        ) 
    } else if(searchQuery === null){
        return null
    } else {
    return <div className="results"><h1>Couldn't find anything for "{searchQuery}"</h1></div>
    }

}


export default Search;