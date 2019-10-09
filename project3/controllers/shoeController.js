const axios = require("axios");
const cheerio = require("cheerio");

console.log("helo")

module.exports = {
    shoeScrape: function(req,res) {
        console.log("GETTING SHOES!")
        axios.get("https://www.amazon.com/s?k=adidas&ref=nb_sb_noss_2")    
        .then(function(response) {
            console.log(response);
        })
        .catch(err=>console.log(err))
    }
};

