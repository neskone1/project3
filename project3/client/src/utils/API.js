import axios from "axios";


export default {
  // Gets all shoes
  getShoes: function() {
    // console.log("TEST API");
    return axios.get("/api/shoe/scrape");
  },
  // Gets shoes in the DB
  allShoes: function() {
    return axios.get("/api/shoe/savedShoe");
  },
  // Deletes shoes with the given id
  // deleteShoes: function(id) {
  //   return axios.delete("/api/shoes/" + id);
  // },
  // Saves a shoe to the database
  saveShoes: function(shoesData) {
    return axios.post("/api/shoe/saveShoe", shoesData);
  }
};
