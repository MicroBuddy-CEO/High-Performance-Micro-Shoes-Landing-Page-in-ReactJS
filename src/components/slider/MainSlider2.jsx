import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image2 from "../../assets/abstract02.png";
import "./MainSlider.css";


const MainSlider2 = () => {
  return (
    <Carousel
      showArrows={true} 
      showThumbs={true} 
      swipeable={true}
    >
      <div className="slide1 relative carousel-slide">
        <img src={image2} alt="Slide 1" className="z-[10]" />
        <div className="apex-text"></div>
        <div className="strock-img"></div>
      </div>
      <div className="slide1 relative carousel-slide">
        <img src={image2} alt="Slide 1" className="z-[10]" />
        <div className="apex-text"></div>
        <div className="strock-img"></div>
      </div>
      <div className="slide1 relative carousel-slide">
        <img src={image2} alt="Slide 1" className="z-[10]" />
        <div className="apex-text"></div>
        <div className="strock-img"></div>
      </div>
    </Carousel>
  );
};

export default MainSlider2;
