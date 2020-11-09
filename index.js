let axios = require("axios");
let cheerio = require("cheerio");

const TEST_URL = "https://www.crawler-test.com/";
let visited = {};
let rootNode = {};
let currentNode = {};
let queue = [];
let printList = [];
let prevDepth = 0;
let maxDepth = 5;

class CreateLink {
  constructor(url, depth, parent) {
    this.url = url;
    this.depth = depth;
    this.parent = parent;
    this.children = [];
  }
}

// const crawl = async (maxDepth) => {
//   axios.get(TEST_URL).then(
//     (response) => {
//       if (response.status == 200) {
//         const html = response.data;
//         const $ = cheerio.load(html);
//         console.log(html);
//       }
//     },
//     (error) => console.log(error)
//   );
// };

const findLinks = async () => {
  axios.get(TEST_URL).then((response) => {
    if (response.status == 200) {
      let html = response.data;
      const $ = cheerio.load(html);
      $("a").each((value) => {
        var link = $(value).attr("href");
        link.contains("cao");
        queue.push(link);
      });
      queue.forEach((url) => {
        console.log(url);
      });
    }
  });
};

findLinks();
