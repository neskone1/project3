import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";

import "./style.css";

class Search extends Component {
  state = {
    shoes: []
  };

  componentDidMount() {
    this.shoeScrape();
  };


  shoeScrape = () => {
    console.log('TEST BUTTON.')
    API.getShoes()
    .then(res => this.setState({ shoes: res.data }))
    .catch(err => console.log(err));
  };

  render() {
      return (

        <div>
          <Hero backgroundImage="http://ward1.com/wp-content/uploads/Ward-1-Design-Sneaker-Room.jpeg">
            <h1>Sneaker Room</h1>
            <h2> Search for your next pair!</h2>
            
            <div className="active-pink-3 active-pink-4 mb-4">
          <input className="form-control" type="text" placeholder="Search" aria-label="Search"></input>
      </div>
              <button className="btn aqua-gradient waves-effect" type="submit">Search</button>



          </Hero>

          <Container style={{ marginTop: 30 }}>
            <Row>
              <Col size="md-12">
                <h1>Ready for a new pair?..</h1>

              </Col>
            </Row>
            <Row>
              <button onClick={testAPI}>TEST</button>
                <Col size="lg-12">
                  <div className= "card"> 
                    <div className= "img-container">
                        <img alt={ ""}
                        src={""}/>
                    </div>
      
                    <div className="content">
                      <ul>
                        <li>
                          <strong>Name:</strong>{}
                        </li>
                        <li>
                          <strong>Brand:</strong>{}
                        </li>
                        <li>
                          <strong>Year:</strong>{}
                        </li>
                        <li>
                          <strong>Price:</strong>{}
                        </li>

                      </ul>
                      
                    </div>

                  </div>
              </Col>
            </Row>

          </Container>
        </div>
  )}
}

export default Search;  