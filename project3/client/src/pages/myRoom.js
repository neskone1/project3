import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css";
import ShoeCard from "../components/shoeCard";
import API from "../utils/API";




class myRoom extends Component {
  state = {
    shoes:[]
  };

  componentDidMount() {
    this.getAllShoes();
  };

  getAllShoes = () => {
    API.allShoes()
    .then(res => this.setState({ shoes: res.data }))
    .catch(err => console.log(err))
  }



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
            <Col size="md-12">
              <Row>
                
                  {!this.state.shoes.length ? (
                    <h1 className="text-center">No Shoes Saved! Click on the Flame in the Search page to Save!</h1>
                  ) : (
                    <Row>
                      {this.state.shoes.map(shoe => {
                        return(
                          <ShoeCard 
                            alt={""} 
                            src={shoe.link} 
                            name={shoe.shoeName} 
                            price={shoe.price} 
                          />
                        )
                      })}
                    </Row>      
                    )}
              </Row>   
            </Col>
          </Row>
        </Container>
      </div>
    )};
}
      
      

export default myRoom;
