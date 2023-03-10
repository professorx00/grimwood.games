import news from '../news.json'
import {DateTime} from 'luxon'
export default defineEventHandler((event) => {
    const length = news.news.length
    const sortedNews = news.news.sort((a, b) => {
      const dateA = DateTime.fromFormat(a.date, "yyyy-MM-dd");
      const dateB = DateTime.fromFormat(b.date, "yyyy-MM-dd");
      return dateA > dateB ? -1 : 1
    });
  
    const latest =
      length - 10 <= 0 ? sortedNews : sortedNews.slice(length - 10);
      
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