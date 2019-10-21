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
            <Col size="md-12">
                <span id="flame">
                    <IoMdFlame />
                </span>
            
                <span id="info">
                    Name: {props.name}
                    <br></br> 
                    Price: {props.price}
                </span>
            </Col>
        </Row>
    
  </div>
  );
}

export default ShoeCard;
