import React from "react";

import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css";
import ShoeLogo from "../ShoeLogo.svg"




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
