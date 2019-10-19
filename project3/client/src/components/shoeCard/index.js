import React from "react";
import { IoMdFlame } from "react-icons/io";
import { Col, Row, Container } from "../Grid";
import "./style.css";

function ShoeCard(props) {
  return (
    <div className="card">
        <div className="img-container">
            <img alt={props.alt} src={props.src}/>
        </div>
        <Row>
            <Col size="md-6">
                <span id="flame">
                    <IoMdFlame />
                </span>
            
                <span id="info">
                    Name: 
                    Price:
                </span>
            </Col>
        </Row>
    
  </div>
  );
}

export default ShoeCard;
