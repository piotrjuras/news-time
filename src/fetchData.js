

const usrSettings = JSON.parse(localStorage.getItem("usr_settings"));
export let {pseudonim, region, regionFullName, searchWord, category, language, languageFullName} = usrSettings || {};

export const subfolder = "/news";
console.warn("!!!!!!---Change subfoler in fetchData.js before production---!!!!!!");


const GENERAL = `${subfolder}/jsonArticles/general/${region}.json`;

const BUSINESS = `${subfolder}/jsonArticles/business/${region}.json`;

const SPORT = `${subfolder}/jsonArticles/sports/${region}.json`;

const TECHNOLOGY = `${subfolder}/jsonArticles/technology/${region}.json`;

const HEALTH = `${subfolder}/jsonArticles/health/${region}.json`;

const SCIENCE = `${subfolder}/jsonArticles/science/${region}.json`;

const ENTERTAINMENT = `${subfolder}/jsonArticles/entertainment/${region}.json`;

export const lastUpdate = `${subfolder}/jsonArticles/lastUpload.json`;


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








