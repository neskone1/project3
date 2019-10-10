import axios from "axios";

export default {
  // Gets all shoes
  getShoes: function() {
    return axios.get("/api/shoes");
  },
  // Gets shoes with the given id
  getShoes: function(id) {
    return axios.get("/api/shoes/" + id);
  },
  // Deletes shoes with the given id
  deleteShoes: function(id) {
    return axios.delete("/api/shoes/" + id);
  },
  // Saves a shoe to the database
  saveShoes: function(bookData) {
    return axios.post("/api/shoes", shoesData);
  }
};
