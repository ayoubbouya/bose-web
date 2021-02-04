import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./sliderCover.module.css";
import media01 from "./imgSlider/media01.svg";
import media02 from "./imgSlider/media02.svg";
import media03 from "./imgSlider/media03.svg";
import media04 from "./imgSlider/media04.svg";
import media05 from "./imgSlider/media05.svg";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

class SliderCover extends Component {
  render() {
    const settings = {
      infinite: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      width: 510,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1424,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 1154,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <div className={styles.sliderContainer}>
          <Slider {...settings} className={styles.slide}>
            <div>
              <img src={media01} alt="media 01" />
            </div>
            <div>
              <img src={media02} alt="media 02" />
            </div>
            <div>
              <img src={media03} alt="media 03" />
            </div>
            <div>
              <img src={media04} alt="media 04" />
            </div>
            <div>
              <img src={media05} alt="media 05" />
            </div>
            <div>
              <img src={media01} alt="media 01" />
            </div>
            <div>
              <img src={media02} alt="media 02" />
            </div>
            <div>
              <img src={media03} alt="media 03" />
            </div>
            <div>
              <img src={media04} alt="media 04" />
            </div>
            <div>
              <img src={media05} alt="media 05" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
export default SliderCover;
