import React  from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./components/pages/About";
import myRoom from "./components/pages/myRoom";
import Search from "./components/pages/search";

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
          
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
