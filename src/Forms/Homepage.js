import React, { useState } from 'react';
import './Form.css';


const Homepage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div>
          <h1>Hello</h1>
      </div>

      
    </>
  );
};

export default Homepage;