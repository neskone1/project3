const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../models");

console.log("helo")

module.exports = {          
    shoeScrape: (req, res) => {
        axios.get("https://www.kicksusa.com/sale-mens-shoes.html")
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
                    link: imgLink
                })
                return i < 25;
            }) 

            console.log(results);
            res.json(results);
        })
        .catch(err => console.log(err));
    },
    
    shoeToRoom: (req, res) => {
        let shoe = {
            name: req.body.name.trim(),
            image: req.body.image.trim(),
            price: req.body.price.trim()
        }
        // console.log('THE SHOE', shoe);
        db.shoes
        .create(shoe)
        .then(dbModel => res.send("SAVE COMPLETE"))
        .catch(err => res.status(422).json(err))
    },

    getShoes: (req, res) => {
        db.shoes
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err)) 
    }
}