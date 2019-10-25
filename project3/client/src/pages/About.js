import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css";
function About() {
  return (
    <div>
      <Hero backgroundImage="http://ward1.com/wp-content/uploads/Ward-1-Design-Sneaker-Room.jpeg">
        <h1>Sneaker Room</h1>
        <h2>Pick your favorite shoes.</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Sneaker Room!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">

            <p><strong>
            This website  was created for all sneaker lovers out there! You can Create your personal account,
            then you can search for any sneaker brand<br></br> ( Nike, Adidas, Reebok, ect. ) 
            and create an account where you can store all the shoes in a wishlist that its called my room;<br></br>
            by clicking on your shoe you can have the option to delete, share or buy it in any website. 
            On the page a newsfeed will let you see other members from our community.</strong>
            </p>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
