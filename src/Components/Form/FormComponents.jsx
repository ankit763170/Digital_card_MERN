import { useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Form.css';
import { Alert } from 'bootstrap';




function FormComponents() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    jobTitle: '',
    websiteURL: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
  
    if (isFormValid()) {
      // Form is valid, you can submit or perform further actions here
      Alert('Thank You For Your Response.');
    } else {
      // Form is invalid, display errors
     Alert('Please enter valid Data')
    }
  };

  const isFormValid = () => {
    const errors = {};

    if (!formValues.firstName) {
      errors.firstName = 'First Name is required';
    }

    if (!formValues.lastName) {
      errors.lastName = 'Last Name is required';
    }

    if (!formValues.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formValues.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formValues.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    }

    // Add more validation rules as needed

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className={`form-control ${formErrors.firstName ? 'is-invalid' : ''}`}
                id="firstName"
                name="firstName"
                value={formValues.firstName}
                onChange={handleInputChange}
              />
              {formErrors.firstName && <div className="invalid-feedback">{formErrors.firstName}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`}
                id="lastName"
                name="lastName"
                value={formValues.lastName}
                onChange={handleInputChange}
              />
              {formErrors.lastName && <div className="invalid-feedback">{formErrors.lastName}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
              />
              {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
   type="number"
                className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`}
                id="formGroupExampleInput2"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleInputChange}
              />
              {formErrors.phoneNumber && <div className="invalid-feedback">{formErrors.phoneNumber}</div>}
            </div>
            {/* Add similar fields for jobTitle and websiteURL */}
            <div className="btn-button-form">
              <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-lg rounded-pill">
                Schedule a Demo
              </button>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="faq">
            <h1>FAQS</h1>
          </div>

          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-item-header">What is a Digital Business Card?</div>
              <div className="accordion-item-body">
                <div className="accordion-item-body-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor animi iusto sit aut id quo harum dolore quisquam ab eum molestiae culpa, amet odit labore. Labore, molestiae? Nesciunt quibusdam fugit id, sint cumque, ipsum reprehenderit itaque quos exercitationem sequi ad, ratione expedita quidem. Laboriosam, suscipit soluta? Reprehenderit earum nulla quas.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-item-header">How do I Share my business Cards? </div>
              <div className="accordion-item-body">
                <div className="accordion-item-body-content">
                  CORS, aka Cross-Origin Resource Sharing, is a mechanism that enables many resources (e.g. images, stylesheets, scripts, fonts) on a web page to be requested from another domain outside the domain from which the resource originated.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-item-header">Are NFC Cards Business safe?  </div>
              <div className="accordion-item-body">
                <div className="accordion-item-body-content">
                  CORS, aka Cross-Origin Resource Sharing, is a mechanism that enables many resources (e.g. images, stylesheets, scripts, fonts) on a web page to be requested from another domain outside the domain from which the resource originated.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-item-header">What are the benefits of NFC cards?  </div>
              <div className="accordion-item-body">
                <div className="accordion-item-body-content">
                  CORS, aka Cross-Origin Resource Sharing, is a mechanism that enables many resources (e.g. images, stylesheets, scripts, fonts) on a web page to be requested from another domain outside the domain from which the resource originated.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-item-header">How do I sign up? </div>
              <div className="accordion-item-body">
                <div className="accordion-item-body-content">
                  CORS, aka Cross-Origin Resource Sharing, is a mechanism that enables many resources (e.g. images, stylesheets, scripts, fonts) on a web page to be requested from another domain outside the domain from which the resource originated.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormComponents;
