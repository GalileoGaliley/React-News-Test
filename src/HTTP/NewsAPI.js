import axios from "axios";
const host = axios.create({
    baseURL: 'https://newsapi.org/v2/'

});

export const fetchNews = async ({country, pageSize, page})=>{
    console.log(pageSize);

    const {data} = await host.get('top-headlines', {
        params: {
            country: country,
            pageSize: pageSize,
            page: page,
            apiKey: 'eb6bd0b431a54210b4b1b8ed75831b24',
        }
    } );
    console.log(data.articles.length)
    return data
}

