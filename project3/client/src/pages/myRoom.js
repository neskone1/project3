import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import RoomCard from "../components/RoomCard/Index";

import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css";
import ShoeLogo from "../ShoeLogo.svg"


;

class myRoom extends Component {
  state = {
    shoes: []
  };

  componentDidMount() {
    this.shoeScrape();
  };


  shoeScrape = () => {
    // console.log('TEST BUTTON.')
    API.getShoes()
    .then(res => this.setState({ shoes: res.data }))
    .catch(err => console.log(err));
  };

  render() {


   
    return(
        <div>
        <Container style={{ marginTop: 20, }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Room!</h1>
          </Col>
        </Row>
        <Row>

        {this.state.shoes.map(shoe => (
          
          
          <RoomCard alt="" src={shoe.link} />
              ))};
          <Col size="lg-12">
    
    
    

    </Col>
        </Row>
    </Container>
      
     
      </div>
      );
      }
      }
      

export default myRoom;
