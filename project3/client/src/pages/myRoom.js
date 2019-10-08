import React from "react";

import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css";




function myRoom () {
    return(
        <div>
        <Container style={{ marginTop: 20, }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Room!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="lg-12">
    <div className= "card"> 
    <div className= "img-container">
    <img alt={ ""}
    src={"https://stockx-360.imgix.net/Nike-LeBron-16-Low-Safari/Images/Nike-LeBron-16-Low-Safari/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1551994559&w=1000"}/>
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
      );
      }
      
      

export default myRoom;
