import news from '../news.json'
export default defineEventHandler((event) => {
    const length = news.news.length
    const latest = length-10<=0 ? news.news : news.news.slice(length-10)
    if(latest.length){
        return{
            statusCode: 200,
            data: latest
        }
    }
    return {
        statusCode: 404,
        data: null
    }
  })