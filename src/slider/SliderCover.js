import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./sliderCover.module.css";
import media01 from "./imgSlider/media01.svg";
import media02 from "./imgSlider/media02.svg";
import media03 from "./imgSlider/media03.svg";
import media04 from "./imgSlider/media04.svg";
import media05 from "./imgSlider/media05.svg";
import prevArrow from "./imgSlider/prevArrow.png";
import nextArrow from "./imgSlider/nextArrow.png";

class SliderCover extends Component {
  render() {
    const SlickButtonFix = ({
      currentSlide,
      slideCount,
      children,
      ...props
    }) => <span {...props}>{children}</span>;

    const settings = {
      infinite: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
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
      prevArrow: (
        <SlickButtonFix>
          <img className={styles.images} src={prevArrow} alt="prev button" />
        </SlickButtonFix>
      ),
      nextArrow: (
        <SlickButtonFix>
          <div
            style={{
              marginTop: -50,
            }}
          >
            <img className={styles.images} src={nextArrow} alt="next button" />
          </div>
        </SlickButtonFix>
      ),
    };
    return (
      <div>
        <div className={styles.sliderContainer}>
          <Slider {...settings}>
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
