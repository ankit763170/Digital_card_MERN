import React from 'react';
import './Second.css'
function SecondSection() {
  return (
    <section>
      <div className="bgblue">
        <div className="container">
          <div className="row paddingtopbar">
            <div className="col-lg-6">
              <div className="secondimg">
                <img src="img/leftimg.png" alt="img" width="100%" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="secheading">
                <h3>
                  Share Contact Details <br />
                  with a single tap
                </h3>
                <span>
                  For people who want to make a great first impression. Tap
                  <br />and share your contact details, gather leads and connect
                  <br />
                  to over 5,000 apps and CRM tools.
                </span>
                <p>
                  The Smart Digital Business Card <br />
                  *No App Needed.
                </p>
              </div>
            </div>
          </div>
          {/* Second row content goes here */}
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
