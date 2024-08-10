const products = [
  {
    id: 1,
    title: "Grimwood City for EZD6",
    short: "A setting for your Savage World games",
    description:
      "Welcome to Grimwood City, a sprawling metropolis where the supernatural and the mundane collide. This exciting new setting for Savage Worlds offers players the chance to explore a rich and complex world filled with danger, intrigue, and adventure. Grimwood City is a city of contrasts, where towering skyscrapers stand alongside ancient, crumbling ruins, and where magic and technology exist side-by-side. The city is divided into several distinct districts, each with its own unique flavor and personality. From the bustling downtown core to the sprawling suburbs, from the gritty industrial districts to the pristine parks and gardens, Grimwood City has something to offer everyone. In Grimwood City, players can take on the roles of powerful wizards, cunning detectives, fearless warriors, and more as they navigate the treacherous waters of a city where magic and technology are intertwined. With its rich history, complex political landscape, and diverse cast of characters, Grimwood City provides the perfect backdrop for thrilling adventures and unforgettable stories. So come and explore Grimwood City, where anything is possible and the only limit is your imagination!",
    price: null,
    release: "TBD",
    img: "/images/aboutus.jpg",
    url: "/products/1",
  },
  {
    id: 2,
    title: "Rise of Midnight Sun",
    short: "A adventure for your Savage World games",
    description:
      "The Cult of the Black Sun has kidnapped the mayor son and is demanding the mayor pardon their leader from his recent judgement of terriost acts. Can your party save the son before he is scarficed to the god of Chaos?",
    price: null,
    release: "TBD",
    img: "https://images.unsplash.com/photo-1549350850-a8f3ee6cb005?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    url: "/products/2",
  },
];

export default defineEventHandler((event) => {
  return {
    statusCode: 200,
    data: products,
  };
});
