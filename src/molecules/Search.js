import React, {useState, useEffect} from "react"
import SearchHero from "./SearchHero";
import Article from "./Article"

import { language } from '../fetchData'


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

        setItemsToRender([])
        setLoadMore(true);
        setNoMore(false);

    },[searchQuery])


    useEffect(() => {

        if(loadMore) renderNewArticles()

    }, [loadMore, searchQuery]); // eslint-disable-line



   useEffect(() => {

        const detectBottom = (e) => {
            if(document.body.clientHeight < window.scrollY + window.innerHeight+50){
                setLoadMore(true);
            }
        }

        document.addEventListener("scroll", detectBottom)

        return () => {
            document.removeEventListener("scroll", detectBottom)
        }


   },[])




    const renderNewArticles = async () => {

        for(let i=0; i<10; i++){
            const itemsToPush = foundedArray[itemsToRender.length];
            if(itemsToPush){
                await itemsToRender.push(itemsToPush);
            } else {
                await setNoMore(true);
            }
            }
        await setLoadMore(false);
            
    }



    if(foundedArray.length && searchQuery !== null){

        return (
            <>

            { itemsToRender[0] ? <SearchHero backgroundPic={itemsToRender[0]}/> : null }
            
            <div className="results">
                
                {itemsToRender.map((item, index) => {         
                    return <Article item = {item} key={index+item.title} />
                })}

            </div>

            {language !== "pl" ? (
                noMore ? <h3>no more results</h3> : <h3>loading...</h3>
            ) : (
                noMore ? <h3>nie ma więcej wyników</h3> : <h3>ładuję...</h3>
            )}

            </>
        ) 
    } else if(searchQuery === null){
        return null
    } else {
        return(
            <div className="results">
                { language !== "pl" ? <h1>Couldn't find anything for "{searchQuery}"</h1> : <h1>Nie udało się niczego znaleźć dla "{searchQuery}"</h1> }
            </div>
        )
    }

}


export default Search;