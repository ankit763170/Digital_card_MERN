import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Order.css';
import axios from 'axios';
import { HmacSHA256 } from 'crypto-js';

const Order = () => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'name':
        setName(value);
        break;
      case 'designation':
        setDesignation(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const [paymentId, setPaymentId] = useState(null);

  const onclickHandler = async () => {
    try {
      const { data: { key, secret } } = await axios.get('http://localhost:8000/getkey');

      const { data: { order } } = await axios.post('http://localhost:8000/payment/checkout', {
        name,
        designation,
        phone,
        email,
      });
console.log(name)
      const options = {
        key: key,
        amount: order.amount,
        currency: order.currency,
        name: name,
        description: "Test Transaction",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg",
        order_id: order.id,
        callback_url: "http://localhost:8000/payment/paymentVerification",
        prefill: {
          name: name,
          email: email,
          contact: phone,
        },
        notes: {
          address: "Razorpay Corporate Office",
          merchant_order_id: order.id,
        },
        theme: {
          color: "#121212",
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on('payment.success', (response) => {
        setPaymentId(response.razorpay_payment_id);

        const signature = HmacSHA256(`${order.id}|${response.razorpay_payment_id}`, secret).toString();

        console.log(name, email, phone);

        axios.post('http://localhost:8000/payment/paymentVerification', {
          payment_id: response.razorpay_payment_id,
          order_id: order.id,
          signature: signature,
          secret: secret,
          email: email,
          phone: phone,
          name: name,
        })
          .then((backendResponse) => {
            console.log('Backend response:', backendResponse.data);
          })
          .catch((backendError) => {
            console.error('Error sending data to the backend:', backendError);
          });

        console.log(response);
      });

      rzp.open();
    } catch (error) {
      console.error('Error during payment initiation:', error);
    }
  };

  return (
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center imgsize">
        <div className="col-md-5">
          <img src="img/Dentist pvc.jpg" alt="Your Image" className="img-fluid" />
        </div>
        <div className="col-md-5">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" value={name} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="designation" className="form-label">Designation</label>
              <input type="text" className="form-control" id="designation" placeholder="Enter your designation" value={designation} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" value={phone} onChange={handleInputChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={handleInputChange} />
            </div>
            <button type="button" className="btn btn-primary" onClick={onclickHandler}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Order;
