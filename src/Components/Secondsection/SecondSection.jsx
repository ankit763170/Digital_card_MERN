import React from 'react';
import './Second.css';

function SecondSection() {
  return (
    <>
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
                  <br /> and share your contact details, gather leads and connect
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
          {/* second row */}
          <div className="row paddingtopbar">
            <div className="col-lg-6">
              <div className="secheading2">
                <div className="">
                  <h3>
                    Share Contact Details <br />
                    with a single tap
                  </h3>
                  <span>
                    Included with all cards. Switch between modes, <br />
                    depending on the situation. Meet up and share your <br />
                    contact details or switch to Lead Generation mode to <br />
                    receive contact details and send them straight to your
                    <br />
                    CRM.
                  </span>
                </div>
              </div>

              <div className="btn-button">
                <button type="button" className="btn btn-light btn-lg rounded-pill">
                  ORDER YOURS
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="secondimg">
                <img src="img/rightimg.png" alt="img" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondSection;
