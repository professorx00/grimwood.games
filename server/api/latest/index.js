import news from '../news.json'
export default defineEventHandler((event) => {
    const length = news.news.length
    const sortedNews = news.news.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA + dateB;
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