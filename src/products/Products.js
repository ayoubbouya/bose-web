import Slider from "react-slick";
import React, { Component } from "react";
import styles from "./products.module.css";
import Bitmap from "./images/Bitmap.svg";
import headphone2 from "./images/2headphones.svg";
import headphone3 from "./images/3headphones.svg";

class Products extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 500,
      pauseOnHover: true,
      centerMode: true,
      cssEase: "linear",
      pauseOnHover: true,
    };
    return (
      <div>
        <div>
          <div className={styles.products}>
            <div className={styles.headSection}>
              <h1 className={styles.heading1}>Related producs</h1>
              <button className={styles.btn}>show all</button>
            </div>

            <Slider {...settings}>
              <div>
                <article>
                  <img src={Bitmap} alt="bitmap" />
                  <div>
                    <h4>QuietComfort 35 wireless headphones II</h4>
                    <p>$449.99</p>
                  </div>
                </article>
              </div>
              <div>
                <article>
                  <img src={headphone2} alt="bitmap" />
                  <div>
                    <h4>SoundLink® aroundear wireless headphones</h4>
                    <p>$269.99</p>
                  </div>
                </article>
              </div>
              <div>
                <article>
                  <img src={headphone3} alt="bitmap" />
                  <div>
                    <h4>Bose on-ear wireless headphones</h4>
                    <p>$209.99</p>
                  </div>
                </article>
              </div>
              <div>
                <article>
                  <img src={headphone3} alt="bitmap" />
                  <div>
                    <h4>Bose on-ear wireless headphones</h4>
                    <p>$209.99</p>
                  </div>
                </article>
              </div>
              <div>
                <article>
                  <img src={headphone3} alt="bitmap" />
                  <div>
                    <h4>Bose on-ear wireless headphones</h4>
                    <p>$209.99</p>
                  </div>
                </article>
              </div>
              <div>
                <article>
                  <img src={headphone3} alt="bitmap" />
                  <div>
                    <h4>Bose on-ear wireless headphones</h4>
                    <p>$209.99</p>
                  </div>
                </article>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
export default Products;
