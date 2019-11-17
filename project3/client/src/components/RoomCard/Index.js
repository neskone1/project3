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
                      Price: <h3>$100.00{props.price}</h3> 
                      <hr></hr> 
                     </span>
                  
        <Link to="/"> 
          <button id= "Remove" className="btn danger-color color-block mb-3 mx-auto waves-effect" >
            Remove
          </button>
       </Link>
         <a id= "Share" href= "https://www.kicksusa.com/mens-basketball-shoes.html?brands=78" className="btn purple-gradient color-block mb-3 mx-auto waves-effect">
            Find 
         </a>
     </ul>

              </Col>
          </Row>
          </Container>
  
        </div>
  )
  }
  
  
  
 

export default RoomCard;