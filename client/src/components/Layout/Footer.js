import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h4><Link to='/about'>About Us</Link></h4>
            <p>
              Discover our journey and commitment to bringing you the finest products with exceptional service. Made with love, just for you.
            </p>
          </div>
          <div className='col-md-4'>
            <h4><Link to='/contact'>Contact Us</Link></h4>
            <p>
              Reach out to our dedicated support team for any inquiries or assistance. We're here to help you!
            </p>
            <p>
              Email: info@example.com<br />
              Phone:+1 (234) 567-890
            </p>
          </div>
          <div className='col-md-4'>
            <h4><Link to='/policy'>Privacy Policy</Link></h4>
            <p>
              Your privacy is important to us. Learn how we handle your data and information by reading our privacy policy.
            </p>
          </div>
        </div>
        <hr />
        <div className='text-center'>
          <p>
            &copy; {new Date().getFullYear()} YOURKART. All rights reserved.
          </p>
          <p>
            made with love 🤍
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;


