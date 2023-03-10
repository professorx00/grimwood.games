import news from '../news.json'
import {DateTime} from 'luxon'

export default defineEventHandler((event) => {
  const dt = DateTime.now()
  const sortedByDate = news.news.sort((a, b) => {
    const dateA = DateTime.fromFormat(a.date, "yyyy-MM-dd");
    const dateB = DateTime.fromFormat(b.date, "yyyy-MM-dd");
    return dateA > dateB ? -1 : 1
  });


  if (sortedByDate.length) {
    return {
      statusCode: 200,
      data: sortedByDate,
    };
  }
  return {
    statusCode: 404,
    data: null,
  };
});