import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { GoogleLogin } from "react-google-login";

import "./style.css";
// import newsFeed from "./newsFeed";

const responseGoogle = (response) => {
  console.log(response);
}

function Login() {
  return (

    <div>
      <Hero backgroundImage="http://ward1.com/wp-content/uploads/Ward-1-Design-Sneaker-Room.jpeg">
        <h1>Sneaker Room</h1>
        <h2> Search for your next pair!</h2>


      </Hero>

      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <header>
              <h1>Log In Using...</h1>
            </header>
            <main>
              <GoogleLogin
                clientId="794209733864-0sh0q593bh0sidd62si1f8ai7tkno8rh.apps.googleusercontent.com"
                content="12345678-gbgin9h7q69rpjehq1cd2441b4nosnid.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
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