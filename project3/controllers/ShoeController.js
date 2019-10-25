const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models");

console.log("helo")

module.exports = {          
    shoeScrape: (req, res) => {
        axios.get("https://www.kicksusa.com/mens-basketball-shoes.html?brands=78")
        .then(function(response) {
            const $ = cheerio.load(response.data);
            const results = [];

            $(".item").each(function(i, element) {
                const imgLink = !$(element).find("a").children("img").attr("data-yo-src") ? $(element).find("a").children("img").attr("src") : $(element).find("a").children("img").attr("data-yo-src");
                const shoeName = $(element).children().children().text().split("\n")[0];
                const price = $(element).find(".item-info").find("p.special-price").find(".price").text().split("\n")[1];
                
                results.push({ 
                    shoeName: shoeName,
                    price: price,
                    link: imgLink,
                    

                })
                return i < 40;
            }) 

            console.log(results);
            res.json(results);
        })
        .catch(err => console.log(err));
    },
    
    // shoeToRoom: (req, res) => {
    //     db.shoes
    //     .create(req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err))
    // }
}