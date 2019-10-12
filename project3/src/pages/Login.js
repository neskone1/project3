import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

import "./style.css";

function Login() {
  return (

    <div>
      <Hero backgroundImage="http://ward1.com/wp-content/uploads/Ward-1-Design-Sneaker-Room.jpeg">
        <h1>Sneaker Room</h1>
        <h2> Search for your next pair!</h2>
        
        
          <button class="btn aqua-gradient waves-effect" type="submit">Sign In</button>
          <a class="google-btn" href="/auth/google">Google+</a>



      </Hero>

      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
          <header>
        <h1>Log In Using...</h1>
    </header>
    <main>
        <a class="google-btn" href="/auth/google">Google+</a>
    </main>

          </Col>
        </Row>
        <Row>

        </Row>
      </Container>
    </div>
  );
}

export default Login;