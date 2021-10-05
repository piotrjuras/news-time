

const usrSettings = JSON.parse(localStorage.getItem("usr_settings"));
export let {pseudonim, region, regionFullName, searchWord, category} = usrSettings || {};



const GENERAL = `./jsonArticles/general/${region}.json`;

const BUSINESS = `./jsonArticles/business/${region}.json`;

const SPORT = `./jsonArticles/sports/${region}.json`;

const TECHNOLOGY = `./jsonArticles/technology/${region}.json`;

const HEALTH = `./jsonArticles/health/${region}.json`;

const SCIENCE = `./jsonArticles/science/${region}.json`;

const ENTERTAINMENT = `./jsonArticles/entertainment/${region}.json`;



export const regions = [
    {
        regionCode: "pl",
        regionName: "Poland"
    },
    {
        regionCode: "us",
        regionName: "United States"
    },
    {
        regionCode: "gb",
        regionName: "United Kingdom"
    },
]
export const JSONurls = [GENERAL, BUSINESS, SPORT, TECHNOLOGY, HEALTH, SCIENCE, ENTERTAINMENT];
export const JSONlabels = ["General","Business", "Sport", "Technology", "Health", "Science", "Entertainment"];







