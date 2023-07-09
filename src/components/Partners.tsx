import test1 from "../assets/test1.svg";
import test2 from "../assets/test2.svg";
import test3 from "../assets/test3.svg";
import test4 from "../assets/test4.svg";
import test5 from "../assets/test5.svg";
import test6 from "../assets/test6.svg";
import test7 from "../assets/test7.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Partners = () => {
  const imageArray = [test1, test2, test3, test4, test5, test6, test7];

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth > 768 ? 6 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <Slider {...settings}>
      {imageArray.map((image, index) => {
        return (
          <div key={index}>
            <img src={image} alt="partner" className="h-32 mx-auto" />
          </div>
        )
      })}
    </Slider>
  )
}

export default Partners;