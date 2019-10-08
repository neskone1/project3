const axios = require('axios')
const cheerio = require('cheerio')

module.exports = function(app) {
    app.get("/shoes", function(req, res){
        console.log("GETTING SHOES!")
        axios.get("https://stockx.com/sneakers")
    .then(function(response) {
        const $ = cheerio.load(response.data);
        console.log(response); 
    }).catch(err=>console.log(err))
    })
};

