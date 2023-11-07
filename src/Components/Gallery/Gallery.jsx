import React from 'react';
import './Gallery.css';
function Gallery() {
  return (
    <div>
      <div className="galleryheading">
        <p>Our Card Range</p>
      </div>
      <div className="container-fluid">
        <div className="box">
          <div className="one">
            <img src="img/Frame 20-1.jpg" alt="" width="300px" />
          </div>
          <div className="two">
            <img src="img/Frame 21-1.jpg" alt="" width="500px" />
          </div>
          <div className="three">
            <img src="img/Frame 20-2.jpg" alt="" width="300px" />
          </div>
          <div className="four">
            <img src="img/Frame 21-1.jpg" alt="" width="500px" />
          </div>
        </div>
        <div className="box1">
          <div className="one">
            <img src="img/Frame 20-2.jpg" alt="" width="500px" />
          </div>
          <div className="two">
            <img src="img/Frame 21-2.jpg" alt="" width="300px" />
          </div>
          <div className="three">
            <img src="img/Frame 20-8.jpg" alt="" width="500px" />
          </div>
          <div className="four">
            <img src="img/Frame 21.jpg" alt="" width="300px" />
          </div>
        </div>
        <div className="box2">
          <div className="one">
            <img src="img/Frame 22.jpg" alt="" width="300px" />
          </div>
          <div className="two">
            <img src="img/Frame 20-9.jpg" alt="" width="500px" />
          </div>
          <div className="three">
            <img src="img/Frame 21-7.jpg" alt="" width="300px" />
          </div>
          <div className="four">
            <img src="img/Frame 20-5.jpg" alt="" width="500px" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
