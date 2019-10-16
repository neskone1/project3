const axios = require("axios");
const cheerio = require("cheerio");
// const request = require("request");

console.log("helo")

module.exports = {
    shoeScrape: (req, res) => {
        axios.get("https://www.kicksusa.com/sale-mens-shoes.html")
        .then(function(response) {
            const $ = cheerio.load(response.data);
            const results = [];

            $(".item").each(function(i, element) {
                const imgLink = $(element).find("a").children("img").attr("src");
                results.push({ link: imgLink });
                return i < 1;
            }) 

            console.log(results);
            res.json(results);
        })
        .catch(err => console.log(err));
    } 
}