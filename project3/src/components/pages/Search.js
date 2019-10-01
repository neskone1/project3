import React from "react";
import Hero from "../Hero";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

function Search() {
  return (
      
    <div>
      <Hero backgroundImage="http://ward1.com/wp-content/uploads/Ward-1-Design-Sneaker-Room.jpeg">
        <h1>Sneaker Room</h1>
        <h2> Search for your next pair!.</h2>
        <input class="form-control" type="text" placeholder="Search" aria-label="Search"></input>
      </Hero>
      
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1></h1>
            
          </Col>
        </Row>
        <Row>
         
        </Row>
      </Container>
    </div>
  );
}

export default Search;