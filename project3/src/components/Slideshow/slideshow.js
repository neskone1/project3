import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Gallery, GalleryImage } from "react";
import { Fade } from 'react-slideshow-image';
import "./style.css";

const fadeImages = [
    "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/017/071/235/original/temp1545076054.jpeg",
    "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/016/697/676/original/temp1543954087.jpeg",
    "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/026/582/293/original/temp1569809675.jpeg",
    "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/017/078/236/original/temp1545087503.jpeg",
    "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/013/769/006/original/temp1533578886.jpeg",
    "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/021/685/991/original/temp1558404697.jpeg",
    "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/012/829/113/original/temp1529756935.jpeg",
    "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/025/119/226/original/temp1566659306.jpeg",
    "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/017/612/295/original/temp1546717803.jpeg",
    "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/018/290/324/original/temp1548765109.jpeg"
  ];
  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: false,
    indicators: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
  }
  
  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade {...fadeProperties}>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[0]} />
            </div>
            
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[1]} />
            </div>
            
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[2]} />
            </div>
            
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[3]} />
            </div>
            
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[4]} />
            </div>
            
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[5]} />
            </div>
            
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[6]} />
            </div>
            
          </div>
        </Fade>
      </div>
    )
  }
// class Slideshow extends Component {
//     const [index, setIndex] = React.useState(0);
//     React.useEffect(() => {
//       const timer = setInterval(() => {
//         if (index === 4) {
//           setIndex(0);
//         } else {
//           setIndex(prev => prev + 1);
//         }
//       }, 3000);
//       return () => clearInterval(timer);
//     }, [index]);
    
//     render() {
//         return (
//         <Gallery
//             style={{
//             background: "black",
//             height: "50vh",
//             width: "50vw"
//             }}
//             index={index}
//             onRequestChange={i => {
//             setIndex(i);
//             }}
//         >
//             {images.map(image => (
//             <GalleryImage objectFit="contain" key={image} src={image} />
//             ))}
//         </Gallery>
        
//         );
//             }
//   }

// const rootElement = document.getElementById("root");
// // ReactDOM.render(<Slideshow />, rootElement);

  export default Slideshow;