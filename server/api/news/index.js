import news from '../news.json'
export default defineEventHandler((event) => {
    return news.news
  })