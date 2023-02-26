import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import "./mySlider.css";

const data = [
  {
    image:
      "https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw2f6ecc84/merchAssets/SS23/Homepage/hero-carousel/hc-018.jpg",
    text1: "T-Shirts",
    text2: "Ultimate Perfomance",
  },

  {
    image:
      "https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw7ad03bfa/merchAssets/SS23/Homepage/hero-carousel/hc-019.jpg",
    text1: "TROUSERS",
    text2: "Ultimate Perfomance",
  },

  {
    image:
      "https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw34fe9658/merchAssets/SS23/Homepage/hero-carousel/hc-012.jpg",
    text1: "Suits",
    text2: "Ultimate Perfomance",
  },

  {
    image:
      "https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwa86b7a50/merchAssets/SS23/Homepage/hero-carousel/hc-0026.jpg",
    text1: "Work Shirts",
    text2: "Ultimate Perfomance",
  },

  {
    image:
      "https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw37e622e1/merchAssets/SS23/Homepage/hero-carousel/hc-013.jpg",
    text1: "Kint Wear",
    text2: "Ultimate Perfomance",
  },

  {
    image:
      "https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dwb8f934b4/merchAssets/SS23/Homepage/hero-carousel/hc-014.jpg",
    text1: "Work Shirts",
    text2: "Ultimate Perfomance",
  },

  {
    image:
      "https://www.charlestyrwhitt.com/on/demandware.static/-/Library-Sites-CTShirtsSharedLibrary/default/dw2f6ecc84/merchAssets/SS23/Homepage/hero-carousel/hc-018.jpg",
    text1: "T-shirts",
    text2: "Ultimate Perfomance",
  },
];

export default function MySlider() {
  const settings = {
    autoScroll: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((e) => (
          <>
            <div className="slider-div1">
              <img className="sliderImg" src={e.image} />
            </div>
            <div className="slider-div2">
              <p className="sliderDiv-p1">{e.text1}</p>
              <p className="sliderDiv-p2" >{e.text2}</p>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
}
