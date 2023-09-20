import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/apex s1.png";
import image2 from "../../assets/bata.png";
import image3 from "../../assets/lotto.png";
import "./MainSlider.css";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


const MainSlider2 = () => {
  return (
    <Carousel
      showArrows={true} 
      showThumbs={true} 
      swipeable={true}
      // autoPlay={true}
      infiniteLoop={true}
      fadeIn={true}
      showStatus={false}
      interval={5000}
    >

      <div className="slide1 relative carousel-slide">
        <img src={image1} alt="Slide 1" className="z-[10]" />
        <div className="apex-text"></div>
        <div className="strock-img"></div>
        <div className="flex absolute top-[62%] right-[180px] text-xl gap-1 text-[#cf9c5d]">
          <AiFillStar/> 
          <AiFillStar/> 
          <AiFillStar/> 
          <AiFillStar/>
          <AiOutlineStar/>
          </div>
      </div>

      <div className="slide1 relative carousel-slide">
        <img src={image2} alt="Slide 1" className="z-[10]" />
        <div className="apex-text"></div>
        <div className="strock-img"></div>
        <div className="flex absolute top-[62%] right-[180px] text-xl gap-1 text-[#cf9c5d]">
          <AiFillStar/> 
          <AiFillStar/> 
          <AiFillStar/> 
          <AiFillStar/>
          <AiOutlineStar/>
          </div>
      </div>

      <div className="slide1 relative carousel-slide">
        <img src={image3} alt="Slide 1" className="z-[10]" />
        <div className="apex-text"></div>
        <div className="strock-img"></div>
        <div className="flex absolute top-[62%] right-[180px] text-xl gap-1 text-[#cf9c5d]">
          <AiFillStar/> 
          <AiFillStar/> 
          <AiFillStar/> 
          <AiFillStar/>
          <AiOutlineStar/>
          </div>
      </div>

    </Carousel>
  );
};

export default MainSlider2;
