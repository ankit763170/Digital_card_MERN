import './userform.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    mobileNumber: '',
    addressLine1: '',
    addressLine2: '',
    postcode: '',
    area: '',
    email: '',
    country: '',
    state: '',
    linkedin: '',
    instagram: '',
    twitter: '',
    facebook: '',
    skype: '',
  });

  useEffect(() => {
    

    axios.post('http://localhost:8000/userform')
      .then(response => {
        setUserData(response.data);

      })
      .catch((error) => {
        console.log('Error fetching user data:', error);
      });
  }, []);

  return (
    <div  className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="profile"
            />
            <span className="font-weight-bold">{userData.name} {userData.surname}</span>
            <span className="text-black-50">{userData.email}</span>
            <span> </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input type="text" className="form-control" placeholder="first name" value={userData.name} />
              </div>
              <div className="col-md-6">
                <label className="labels">Surname</label>
                <input type="text" className="form-control" placeholder="surname" value={userData.surname} />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Mobile Number</label>
                <input type="text" className="form-control" placeholder="enter phone number" value={userData.mobileNumber} />
              </div>
              <div className="col-md-12">
                <label className="labels">Address Line 1</label>
                <input type="text" className="form-control" placeholder="enter address line 1" value={userData.addressLine1} />
              </div>
              <div className="col-md-12">
                <label className="labels">Address Line 2</label>
                <input type="text" className="form-control" placeholder="enter address line 2" value={userData.addressLine2} />
              </div>
              <div className="col-md-12">
                <label className="labels">Postcode</label>
                <input type="text" className="form-control" placeholder="Postcode" value={userData.postcode} />
              </div>
              <div className="col-md-12">
                <label className="labels">Area</label>
                <input type="text" className="form-control" placeholder="enter address line 2" value={userData.area} />
              </div>
              <div className="col-md-12">
                <label className="labels">Email ID</label>
                <input type="text" className="form-control" placeholder="enter email id" value={userData.email} />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">Country</label>
                <input type="text" className="form-control" placeholder="country" value={userData.country} />
              </div>
              <div className="col-md-6">
                <label className="labels">State/Region</label>
                <input type="text" className="form-control" placeholder="state" value={userData.state} />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-primary profile-button" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              <span>Social media</span>
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Linkedin</label>
              <input type="text" className="form-control" placeholder="link" value={userData.linkedin} />
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">Instagram</label>
              <input type="text" className="form-control" placeholder="link" value={userData.instagram} />
            </div>
            <div className="col-md-12">
              <label className="labels">Twitter</label>
              <input type="text" className="form-control" placeholder="link" value={userData.twitter} />
            </div>
            <div className="col-md-12">
              <label className="labels">Facebook</label>
              <input type="text" className="form-control" placeholder="link" value={userData.facebook} />
            </div>
            <div className="col-md-12">
              <label className="labels">Skype</label>
              <input type="text" className="form-control" placeholder="link" value={userData.skype} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
