import news from '../../news.json'
export default defineEventHandler((event) => {
    const {id} = event.context.params
    const article = news.news.filter((item)=>{if(item.id == id){
      return item
    }})
    if(article[0]){
      return {
        statusCode: 200,
        data: article[0]
      }
    }
    return {
      statusCode: 404,
      data: null
    }
  })