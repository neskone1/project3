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
                const imgLink = !($(element).find("a").children("img").attr("data-yo-src")) ? $(element).find("a").children("img").attr("src") : $(element).find("a").children("img").attr("data-yo-src");
                const shoeName = $(element).find(".item-info").children().text().split("\n")[0];
                // const shoePrice = $(element).find(".item-info").children().text().split("\n")[5];

                results.push({ 
                    link: imgLink,
                    name: shoeName,
                    // price: shoePrice
                });
                return i < 12;
            }) 

            console.log(results);
            res.json(results);
        })
        .catch(err => console.log(err));
    },


}