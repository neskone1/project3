const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
// console.log(apiRoutes)
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);
// require("./routes/apiroutes/shoes")(app);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });
// Send every other request to the React app
// Define any API routes before this runs

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

//module.exports = app;
  