import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { Gallery, GalleryImage } from "react";

const images = [
    "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/017/071/235/original/temp1545076054.jpeg",
    "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/016/697/676/original/temp1543954087.jpeg",
    "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/026/582/293/original/temp1569809675.jpeg",
    "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/017/078/236/original/temp1545087503.jpeg",
    "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/013/769/006/original/temp1533578886.jpeg",
    "https://image.goat.com/crop/3500/attachments/micropost_pictures/images/021/685/991/original/temp1558404697.jpeg"
  ];

class Slideshow extends Component {
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
      const timer = setInterval(() => {
        if (index === 4) {
          setIndex(0);
        } else {
          setIndex(prev => prev + 1);
        }
      }, 3000);
      return () => clearInterval(timer);
    }, [index]);
    
    render() {
        return (
        <Gallery
            style={{
            background: "black",
            height: "50vh",
            width: "50vw"
            }}
            index={index}
            onRequestChange={i => {
            setIndex(i);
            }}
        >
            {images.map(image => (
            <GalleryImage objectFit="contain" key={image} src={image} />
            ))}
        </Gallery>
        
        );
            }
  }

const rootElement = document.getElementById("root");
// ReactDOM.render(<Slideshow />, rootElement);

  export default Slideshow;