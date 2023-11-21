import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';

const CardRange = () => {
  return (
    <div className="container">
      <h2 className="text-center">Card Range</h2>
      <div className="row">
        <div className="col-md-6">
          <img src="/img/card1.jpg" alt="Image 1" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <img src="/img/card2.jpg" alt="Image 2" className="img-fluid" />
        </div>
      </div>
      <div className="btn-container">
        {/* Using Link component for navigation */}
        <Link to="/explore" className="btn btn-prima">
          Explore
        </Link>
      </div>
    </div>
  );
};

export default CardRange;
