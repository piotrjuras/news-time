const usrSettings = JSON.parse(localStorage.getItem("usr_settings"));
export let {pseudonim, region, regionFullName, searchWord, category, language, languageFullName} = usrSettings || {};

const url = "http://piotr.juras.pl/news";
// const url = "";

if(url === "") console.warn("!!!!---- CHANGE url TO ABSOLUTE BEFORE PRODUCTION ----!!!!")



const GENERAL = `${url}/jsonArticles/general/${region}.json`;

const BUSINESS = `${url}/jsonArticles/business/${region}.json`;

const SPORT = `${url}/jsonArticles/sports/${region}.json`;

const TECHNOLOGY = `${url}/jsonArticles/technology/${region}.json`;

const HEALTH = `${url}/jsonArticles/health/${region}.json`;

const SCIENCE = `${url}/jsonArticles/science/${region}.json`;

const ENTERTAINMENT = `${url}/jsonArticles/entertainment/${region}.json`;

export const lastUpdate = `${url}/jsonArticles/lastUpload.json`;


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

export const JSONlabels = ["General", "Business", "Sport", "Technology", "Health", "Science", "Entertainment"];

export const JSONlabelsPL = ["Ogólne", "Biznes", "Sport", "Technologia", "Zdrowie", "Nauka", "Rozrywka"];








