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
    const settings = {
      infinite: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerPadding: "0px",
      prevArrow: (
        <img className={styles.images} src={prevArrow} alt="prev button" />
      ),
      nextArrow: (
        <img className={styles.images} src={nextArrow} alt="next button" />
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
