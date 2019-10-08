import React from "react";

import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css";




function newsFeed () {
    return(
        <div>
        <Container style={{ marginTop: 20, }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To News Feed</h1>
          </Col>
        </Row>
        <Row>
          <Col size="lg-12">
    <div id="news-feed" > 
    <div className= "img-container">
    <img alt={ ""}
    src={"https://cask.scotch.io/2014/10/react-tweets-demo.png"}/>
    </div>
    
    
    <div className="content">
   
    
    </div>

    </div>
    
    

    </Col>
        </Row>
    </Container>
      
     
      </div>
      );
      }
      
      

export default newsFeed;
