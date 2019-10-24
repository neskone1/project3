import React  from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./pages/About";
import myRoom from "./pages/myRoom";
import Search from "./pages/Search";
import Login from "./pages/Login";
import newsFeed from "./pages/newsFeed";
// import newsFeed from "./pages/newsFeed";
// imp  ort Login from "./pages/Login"
import Navbar from "./components/headerComponent/header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/myRoom" component={myRoom} />
          <Route exact path="/search" component={Search} />
           <Route exact path="/newsFeed" component={newsFeed} /> 
           <Route exact path="/Login" component={Login} />
          
          
          
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
