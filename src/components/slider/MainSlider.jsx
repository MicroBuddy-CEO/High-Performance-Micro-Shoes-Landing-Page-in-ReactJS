import Slider from "react-slick";
import image1 from "../../assets/abstract01.png";
import image2 from "../../assets/abstract02.png";
import image3 from "../../assets/abstract03.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider = () => {

  const settings = {

    customPaging: function (i) {
      return (
        <a>
          <img src={`../../assets/abstract0${i + 1}.png`} alt={`Thumbnail ${i + 1}`}/>
        </a>
      );
    },

    customPaging2: function (i) {
      return (
        <a>
          <img src={`../../assets/abstract0${i + 1}.png`} alt={`Thumbnail ${i + 1}`}/>
        </a>
      );
    },

    dots: true,

    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Custom Paging</h2>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 1" className="w-[500px]" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" className="w-[500px]" />
        </div>
        <div>
          <img src={image3} alt="Slide 3" className="w-[500px]" />
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;
