import { redirect, useNavigate, useNavigation } from 'react-router-dom';
import './Explore.css';
import React from 'react';

const CardRow = () => {
  const navigate = useNavigate();

  function onHandleSubmit (){
    navigate('/order');
  }
  return (
    <div className="somelist container">
      <div className="somelist container">
        <ul>
          <li className="items">
            <a href="">
              <h6>Home</h6>
            </a>
          </li>
          <li className="separator" style={{ marginTop: '6px', color: 'rgb(17, 84, 166)' }}>
            <b>&gt;</b>
          </li>
          <li className="items">
            <a href="">
              <h6>Executive</h6>
            </a>
          </li>
        </ul>
        <hr />
      </div>
      <div className="outer-container">
        <div className="filter-by-card">
          <h5>Filter designs by card type</h5>
        </div>
        <div className="button-container-cardtype">
          <button type="button" className="btn btn-outline-dark btn-sm">
            Executive
          </button>
          <button type="button" className="btn btn-outline-dark btn-sm">
            Premium
          </button>
          <button type="button" className="btn btn-outline-dark btn-sm">
            Metal Cards
          </button>
        </div>
        <div className="filter-by-profession">
          <h5>Filter designs by Profession</h5>
        </div>
        <div className="button-container-profession">
          <button type="button" className="btn btn-outline-dark btn-sm">
            Doctors
          </button>
          <button type="button" className="btn btn-outline-dark btn-sm">
            Business
          </button>
          <button type="button" className="btn btn-outline-dark btn-sm">
            Lawyer
          </button>
          <button type="button" className="btn btn-outline-dark btn-sm">
            Accountant
          </button>
          <button type="button" className="btn btn-outline-dark btn-sm">
            Designer
          </button>
          <button type="button" className="btn btn-outline-dark btn-sm">
            Other
          </button>
        </div>
      </div>
      <div className="card-row container" style={{ marginTop: '80px' }}>
        <div className="card">
          <img className="card-img" src="/img/15.jpg" alt="Image 1" />
          <div className="card-info">
            <table>
              <tr>
                <td>Business Card 1</td>
                <td rowspan="0">
                  <button type="button" className="card-btn btn btn-primary" onClick={onHandleSubmit}>
                    &gt;
                  </button>
                </td>
              </tr>
              <tr>
                <td>999/-</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src="img/2.jpg" alt="Image 1" />
          <div className="card-info">
            <table>
              <tr>
                <td>Business Card 2</td>
                <td rowspan="0">
                  <button type="button" className="card-btn btn btn-primary" onClick={onHandleSubmit}>
                    &gt;
                  </button>
                </td>
              </tr>
              <tr>
                <td>999/-</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src="img/3.jpg" alt="Image 1" style={{ border: 'none' }} />
          <div className="card-info">
            <table>
              <tr>
                <td>Doctor Card 1</td>
                <td rowspan="0">
                  <button type="button" className="card-btn btn btn-primary" onClick={onHandleSubmit}>
                    &gt;
                  </button>
                </td>
              </tr>
              <tr>
                <td>999/-</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src="img/14.jpg" alt="Image 1"  />
          <div className="card-info">
            <table>
              <tr>
                <td>Designer Card 1</td>
                <td rowspan="0">
                  <button type="button"  onClick={onHandleSubmit} className="card-btn btn btn-primary">
                    &gt;
                  </button>
                </td>
              </tr>
              <tr>
                <td>999/-</td>
              </tr>
            </table>
          </div>
        </div>
        {/* Add three more similar cards here */}
      </div>
      <div className="card-row container">
        {/* Add four cards here */}
        <div className="card">
          <img className="card-img" src="img/5.jpg" alt="Image 1" />
          <div className="card-info">
            <table>
              <tr>
                <td>Business Card 3</td>
                <td rowspan="0">
                  <button type="button" onClick={onHandleSubmit} className="card-btn btn btn-primary">
                    &gt;
                  </button>
                </td>
              </tr>
              <tr>
                <td>999/-</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src="img/6.jpg" alt="Image 1" />
          <div className="card-info">
            <table>
              <tr>
                <td>Doctor Card 2</td>
                <td rowspan="0">
                  <button type="button" onClick={onHandleSubmit} className="card-btn btn btn-primary">
                    &gt;
                  </button>
                </td>
              </tr>
              <tr>
                <td>999/-</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src="img/8.jpg" alt="Image 1" />
          <div className="card-info">
            <table>
              <tr>
                <td>Business Card 1</td>
                <td rowspan="0">
                  <button type="button" onClick={onHandleSubmit} className="card-btn btn btn-primary">
                    &gt;
                  </button>
                </td>
              </tr>
              <tr>
                <td>999/-</td>
              </tr>
            </table>
          </div>
        </div> 
        <div className="card">
          <img className="card-img" src="img/9.jpg" alt="Image 1" />
          <div className="card-info">
            <table>
              <tr>
                <td>Business Card 1</td>
                <td rowspan="0">
                  <button type="button" onClick={onHandleSubmit} className="card-btn btn btn-primary">
                    &gt;
                  </button>
                </td>
              </tr>
              <tr>
                <td>999/-</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="card-row container">
        {/* Add four cards here */}
        <div className="card">
          <img className="card-img" src="img/10.jpg" alt="Image 1" />
          <div className="card-info">
            <table>
              <tr>
                <td>Business Card 1</td>
                <td rowspan="0">
                  <button type="button" onClick={onHandleSubmit} className="card-btn btn btn-primary">
                    &gt;
                  </button>
                </td>
              </tr>
              <tr>
                <td>999/-</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src="img/11.jpg" alt="Image 1" />
          <div className="card-info">
            <table>
              <tr>
                <td>Business Card 1</td>
                <td rowspan="0">
                  <button type="button" onClick={onHandleSubmit} className="card-btn btn btn-primary">
                    &gt;
                  </button>
                </td>
              </tr>
              <tr>
                <td>999/-</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src="img/12.jpg" alt="Image 1" />
          <div className="card-info">
            <table>
              <tr>
                <td>Business Card 1</td>
                <td rowspan="0">
                  <button type="button" onClick={onHandleSubmit} className="card-btn btn btn-primary">
                    &gt;
                  </button>
                </td>
              </tr>
              <tr>
                <td>999/-</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="card">
          <img className="card-img" src="img/13.jpg" alt="Image 1" />
          <div className="card-info">
            <table>
              <tr>
                <td>Business Card 1</td>
                <td rowspan="0">
                  <button type="button" onClick={onHandleSubmit} className="card-btn btn btn-primary">
                    &gt;
                  </button>
                </td>
              </tr>
              <tr>
                <td>999/-</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center', marginTop: '50px', marginBottom: '80px' }}>
        <button className="loadmore btn btn-primary">Load More</button>
      </div>
    </div>
  );
};

export default CardRow;
