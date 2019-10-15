const axios = require("axios");
const cheerio = require("cheerio");
// const request = require("request");

console.log("helo")

module.exports = {
    shoeScrape: () => {
        axios.get("https://www.kicksusa.com/sale-mens-shoes.html")
        .then(function(response) {
            const $ = cheerio.load(response.data);
            const results = [];

            $(".item").each(function(i, element) {
                const imgLink = $(element).children("a").children("img").attr("data-yo-src");
                results.push({ link: imgLink })
                
            }) 

            console.log(results)    
        })
        .catch(err => console.log(err));
    } 
}







// axios.get(url)    
// .then(function(response) {
//     const $ = cheerio.load(response);
//     const result ={};
//     // result.image = $('LazyImage__StyledImage-sc-153p075-0 MEhRc');
//     // result.title = $(".EI11Pd").children("a").text();
//     // result.price = $(".Nr22bf").children("span").text();  
    
//     console.log(result);
// }
