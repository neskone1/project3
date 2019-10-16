import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ShoeLogo from "../ShoeLogo.svg"
import { Link } from "react-router-dom";


import "./style.css";

function Search() {
  return (

    <div>
      <Hero backgroundImage="http://ward1.com/wp-content/uploads/Ward-1-Design-Sneaker-Room.jpeg">
        <h1>Sneaker Room</h1>
        <h2> Search for your next pair!</h2>
        
        <div class="active-pink-3 active-pink-4 mb-4">
  <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
</div>
          <button class="btn aqua-gradient waves-effect" type="submit">Search</button>
         



      </Hero>

      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Add unlimited sneakers to your Room!</h1>


            <div id="searchCard" className= "card">
    
    <div className= "img-container">
    <img id="shoeLogo" alt={ "shoes"}
    src={ShoeLogo}/>
    </div>
    
    
    <div className="content">
    <ul>
        <li>
            <strong>Name:</strong>{}
        </li>
        <hr></hr> 
        <li>
        <strong>Brand:</strong>{}
        </li>
        <hr></hr> 
        <li>
        <strong>Year:</strong>{}
        </li>
        <hr></hr> 
        <Link
          
              to="/myRoom"> 
              <button id= "Add" className="btn purple-gradient color-block mb-3 mx-auto waves-effect">
              Add
              </button>
              
            </Link>

            <Link
          
              to="/myRoom"> 
              <button id= "Share" className="btn purple-gradient color-block mb-3 mx-auto waves-effect">
              Share
              </button>
              
            </Link>
        

    </ul>
    
    </div>

    </div>

          </Col>
        </Row>
        <Row>

        </Row>
      </Container>
    </div>
  );
}

export default Search;