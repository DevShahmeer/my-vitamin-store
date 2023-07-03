import React, { useState } from 'react';
import './NewsletterSub.css';

const NewsletterSub = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Subscribing ${email} to the newsletter...`);
    // Send a request to the server to subscribe the email
  };

  return (
    <div className="newsletter-container">
      <h1 className='headline_News'><span>Subscribe to Our Newsletter</span></h1>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterSub;