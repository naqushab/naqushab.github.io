const projects = [
  {
    className: "adobe",
    description: "Lead Software Engineer at Adobe, India in the Document Cloud Division aka Adobe Acrobat.",
    clientDescription:"Working as Lead Software Engineer, I joined Adobe on Jun 27, 2016 in Adobe Acrobat Document Cloud as a Software Engineer.",
    links: {
      website: "https://www.adobe.com/in",
    },
    slug: "adobe",
    title: "Adobe",
    cover: require('./adobe.png'),
    theme: {
      background: '#5ab6ff',
    },
  },

  {
    className: 'dabblePoint',
    description: 'Dabble Point is interactive interview preparation guide which helps users to keep track of the visited questions.',
    links: {
      website: 'http://naqushab.pythonanywhere.com/'
    },
    slug: 'dabble-point',
    title: 'Dabble Point',
    cover: require('./dabblepoint.png'),
    theme: {
      background: '#00a5d1',
    },
  },
  {
    className: 'searchEngineScrapy',
    description: 'Search Engine Scrapy is a Scrapy project designed to Scrape data from various Search Engines.',
    clientDescription: "SearchEngineScrapy is a web crawler and scraper for scraping data off various search engines such as Google.com, Bing.com, DuckDuckGo, Ask.com, Baidu. It is based on Python Scrapy project and is developed using Python 2.7 and is compatible with Python 3.",
    links: {
      website: 'https://naqushab.github.io/SearchEngineScrapy/',
    },
    slug: 'searchenginescrapy',
    title: 'Search Engine Scrapy',
    cover: require('./searchenginescrapy.png'),
    theme: {
      background: '#F7F7F7',
      light: true,
    },
  },
  {
    className: 'hexApp',
    description: 'HEX is an android arcade game to control blocks for going out of a hexagon. It is built on ONSENUI platform with the help of monaca.',
    links: {
      android: 'http://amzn.com/B00WH4ETNQ"',
    },
    slug: 'hex-app',
    title: 'Hex',
    cover: require('./hex.png'),
    theme: {
      background: '#a77e60',
    },
  },
];

export default projects;
