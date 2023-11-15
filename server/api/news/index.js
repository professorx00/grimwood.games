import { DateTime } from "luxon";

const news = [
  {
    id: 1,
    title: "Grimwood City in production",
    description:
      "Welcome to Grimwood City, a sprawling metropolis where the supernatural and the mundane collide. This exciting new setting for Savage Worlds offers players the chance to explore a rich and complex world filled with danger, intrigue, and adventure. Grimwood City is a city of contrasts, where towering skyscrapers stand alongside ancient, crumbling ruins, and where magic and technology exist side-by-side. The city is divided into several distinct districts, each with its own unique flavor and personality. From the bustling downtown core to the sprawling suburbs, from the gritty industrial districts to the pristine parks and gardens, Grimwood City has something to offer everyone. In Grimwood City, players can take on the roles of powerful wizards, cunning detectives, fearless warriors, and more as they navigate the treacherous waters of a city where magic and technology are intertwined. With its rich history, complex political landscape, and diverse cast of characters, Grimwood City provides the perfect backdrop for thrilling adventures and unforgettable stories. So come and explore Grimwood City, where anything is possible and the only limit is your imagination!",
    img: "https://images.unsplash.com/photo-1539035104074-dee66086b5e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    url: "/news/1",
    date: "2023-03-01",
  },
  {
    id: 2,
    title: "Rise of Midnight Sun",
    description:
      "Coming Soon! A new adventure set in the exciting world of Grimwood City. Can your party help the mayor save his son before he has to pardon a terriost?",
    img: "https://images.unsplash.com/photo-1618426257457-0bc6cfa2de33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    url: "/news/2",
    date: "2023-02-14",
  },
  {
    id: 3,
    title: "Grimwood Games Website Release",
    description:
      "We are excited to announce our new website. The logo still is in question but everything else is good to go. ",
    img: "https://images.unsplash.com/photo-1436918898788-ebce04d38e46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    url: "/news/3",
    date: "2023-03-08",
  },
  {
    id: 4,
    title: "Grimwood City: Dark Days",
    description:
      "We are excited to announce our first actual play coming to twitch in May. We will be playing the new Grimwood City: Dark Days campaign. ",
    img: "https://www.scabard.com/user/professorx00/image/DarkDays.png",
    url: "/news/4",
    date: "2023-04-11",
  },
  {
    id: 5,
    title: "Grimwood City Season 2: The Long Winter",
    description:
      "Come Watch the Second Season of Grimwood City on <a href='https://www.twitch.tv/grimwood_games'>Twitch</a>. ",
    img: "https://www.scabard.com/user/professorx00/image/DarkDays.png",
    url: "/news/5",
    date: "2023-11-01",
  },
];

export default defineEventHandler((event) => {
  const dt = DateTime.now();
  const sortedByDate = news.sort((a, b) => {
    const dateA = DateTime.fromFormat(a.date, "yyyy-MM-dd");
    const dateB = DateTime.fromFormat(b.date, "yyyy-MM-dd");
    return dateA > dateB ? -1 : 1;
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
