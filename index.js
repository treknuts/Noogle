let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs');

const doStuff = () => {
    axios.get('https://www.stackoverflow.com').then((response) => {
        if (response.status == 200) {
            const html = response.data;
            const $ = cheerio.load(html);
            console.log(html);
        }
    }, (error) => console.log(error));
}

doStuff();