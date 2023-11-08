import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function MyOwlCarousel() {
  const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  return (
    <div>
      <div className="carousel">
        <p>Industries Who Love Us</p>
      </div>
      <div className="container">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <img src="img/slider1.png" alt="sliderimg" />
          </div>
          <div className="item">
            <img src="img/slider2.png" alt="sliderimg" />
          </div>
          <div className="item">
            <img src="img/slider3.png" alt="sliderimg" />
          </div>
          <div className="item">
            <img src="img/slider4.png" alt="sliderimg" />
          </div>
          <div className="item">
            <img src="img/slider1.png" alt="sliderimg" />
          </div>
          <div className="item">
            <img src="img/slider2.png" alt="sliderimg" />
          </div>
          <div className="item">
            <img src="img/slider3.png" alt="sliderimg" />
          </div>
          <div className="item">
            <img src="img/slider4.png" alt="sliderimg" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default MyOwlCarousel;
