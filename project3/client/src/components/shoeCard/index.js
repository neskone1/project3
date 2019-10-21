import React from "react";
import { IoMdFlame } from "react-icons/io";
import { Col, Row, Container } from "../Grid";
// import { Link } from "react-router-dom"; 

import "./style.css";

function ShoeCard(props) {
  return (
        <div className="card" id="cardBox">
            <div className="img-container">
                <img alt={props.alt} src={props.src}/>
            </div>
          <Row>
              <Col size="sm-6">
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
  )
  }
  
  export default ShoeCard;
  
//   <div id="searchCard" className= "card">
//     <div className= "img-container"> 
//       <img id="shoeLogo" alt={props.alt} 
//       src={props.src}/>
//     </div>                        
//     <div className="content">
//       <ul>
//         <li>
//           <strong>Name:</strong>
//         </li>
//         <hr></hr> 
//         <li>
//           <strong>Price:</strong>
//         </li>
//         <hr></hr> 
//         <Link to="/myRoom"> 
//           <button id= "Add" className="btn purple-gradient color-block mb-3 mx-auto waves-effect">
//           Add
//           </button>
//         </Link>
//       </ul>
//     </div>
//   </div>
// );