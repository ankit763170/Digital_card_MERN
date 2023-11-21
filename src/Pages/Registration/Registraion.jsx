import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (values.password === values.confirmPassword) {
      console.log('Passwords match! Storing password:', values.password);
      setValues({
        ...values,
        confirmPassword: '',
      });

      try {
        const response = await axios.post('http://localhost:8000/signup', values);

        console.log('Registration successful:', response.data);
        alert('Registration successful!');
      } catch (error) {
        alert('Error during registration:', error);
        // Handle registration error
      }
    } else {
      console.log('Passwords do not match!');
    }
  };

  return (
    <div style={{ backgroundColor: 'blueviolet', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <div style={{ border: '1px solid #ddd', borderRadius: '15px', padding: '20px' }}>
          <h1 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '30px' }}>Sign up</h1>
          <form>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}>Your Name</label>
              <input
                type="text"
                id="name"
                style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ddd' }}
                placeholder="Your Name"
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}>Your Email</label>
              <input
                type="email"
                id="email"
                style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ddd' }}
                placeholder="Your Email"
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="password" style={{ display: 'block', fontWeight: 'bold' }}>Password</label>
              <input
                type="password"
                id="password"
                style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ddd' }}
                placeholder="Password"
                onChange={(e) => setValues({ ...values, password: e.target.value })}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="confirmPassword" style={{ display: 'block', fontWeight: 'bold' }}>Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ddd' }}
                placeholder="Confirm Password"
                onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
              <input type="checkbox" style={{ margin: '0 5px' }} />
              <label style={{ fontWeight: 'bold' }}>I agree to all statements in <a href="#!">Terms of service</a></label>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="button" style={{ background: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }} onClick={(e) => handleSubmit(e)}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
