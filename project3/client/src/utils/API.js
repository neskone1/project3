import axios from "axios";
export default {
    getShoes: function () {
        console.log("TEST API");
        return axios.get("/api/shoe/")
    }
}