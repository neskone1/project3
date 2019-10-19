import React from "react";

import Slideshow from "../components/Slideshow/slideshow"
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css";


// const images = [
//   "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/017/071/235/original/temp1545076054.jpeg",
//   "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/016/697/676/original/temp1543954087.jpeg",
//   "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/026/582/293/original/temp1569809675.jpeg",
//   "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/017/078/236/original/temp1545087503.jpeg",
//   "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/013/769/006/original/temp1533578886.jpeg",
//   "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/021/685/991/original/temp1558404697.jpeg"
// ];

function newsFeed() {
  return (
    <div>
      <Container style={{ marginTop: 10, }}>
        <Row>
          <Col size="md-12">
            <h1>Looks</h1>
          </Col>
        </Row>
        <Row>
        
          <div className="content">
          <Slideshow />
          </div>

        </Row>
      </Container>

    </div>
  );
}



// function App() {
//   const [index, setIndex] = React.useState(0);
//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       if (index === 4) {
//         setIndex(0);
//       } else {
//         setIndex(prev => prev + 1);
//       }
//     }, 3000);
//     return () => clearInterval(timer);
//   }, [index]);

//   return (
//     <Gallery
//       style={{
//         background: "black",
//         height: "50vh",
//         width: "50vw"
//       }}
//       index={index}
//       onRequestChange={i => {
//         setIndex(i);
//       }}
//     >
//       {images.map(image => (
//         <GalleryImage objectFit="contain" key={image} src={image} />
//       ))}
//     </Gallery>
    
//   );
  
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(App, rootElement);


export default newsFeed;
