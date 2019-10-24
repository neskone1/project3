import React from "react";
import { IoMdFlame } from "react-icons/io";
import { Col, Row, Container } from "../Grid";
 import { Link } from "react-router-dom"; 

import "./style.css";

function RoomCard(props) {
  return (
        <div className="card" id="cardBox">
            <div className="img-container">
                <img alt={props.alt} src={props.src}/>
            </div>
            <Container>
          <Row>
              <Col size="sm-6">
                  <span id="flame">
                      <IoMdFlame />
                  </span>
  <ul>
                  <span id="info">
                      Name: NIKE{props.shoeName}
                      <hr></hr> 
                      Price: <h3>$299.99{props.price}</h3> 
                      <hr></hr> 
                     </span>
                  
        <Link to="/"> 
          <button id= "Remove" className="btn danger-color color-block mb-3 mx-auto waves-effect" >
            Remove
          </button>
       </Link>
      <Link to="/myRoom">
          <button id= "Share" className="btn purple-gradient color-block mb-3 mx-auto waves-effect">
            Share 
         </button>               
       </Link>
     </ul>

              </Col>
          </Row>
          </Container>
  
        </div>
  )
  }
  
  
  
 

export default RoomCard;