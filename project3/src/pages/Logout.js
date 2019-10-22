import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from 'react-google-login';
import "./style.css";


const responseGoogle = (response) => {
    console.log(response);
}

function Logout() {
    return (
<div></div>
       // <div>
        //     <Hero backgroundImage="http://ward1.com/wp-content/uploads/Ward-1-Design-Sneaker-Room.jpeg">

        //     </Hero>

        //     <Container style={{ marginTop: 30 }}>
        //         <Row>
        //             <Col size="md-12">
        //                 <header>
        //                     <h1>See you next time!</h1>
        //                 </header>
        //                 <main>
    //     <GoogleLogout
    //     clientId="794209733864-0sh0q593bh0sidd62si1f8ai7tkno8rh.apps.googleusercontent.com"
    //     buttonText="Logout"
    //     // onLogoutSuccess={logout}
    //     onLogoutSuccess={responseGoogle}
    //     onFailure={responseGoogle}
    // >
    // </GoogleLogout>
        //                 </main>

        //             </Col>
        //         </Row>
        //         <Row>

        //         </Row>
        //     </Container>
        // </div>
    );
}




export default Logout;