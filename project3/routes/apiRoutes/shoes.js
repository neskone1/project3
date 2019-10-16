const router = require("express").Router();
const shoeController = require("../../controllers/shoeController");


router.route("/scrape")
.get(shoeController.shoeScrape);


module.exports = router;
// module.exports = function(app) {
//     console.log("hellos")
//     app.get("/shoes", function(req, res){
//         console.log("GETTING SHOES!")
//         axios.get("https://stockx.com/sneakers")
//     .then(function(response) {
//         const $ = cheerio.load(response.data);
//         console.log(response); 
//     }).catch(err=>console.log(err))
//     })
// };


    