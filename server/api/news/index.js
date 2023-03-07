import news from '../news.json'

export default defineEventHandler((event) => {
  const sortedByDate = news.news.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA + dateB;
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