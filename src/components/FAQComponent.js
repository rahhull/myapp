import React, { useState } from 'react';
import './FAQComponent.css'; // Add your CSS file for styling

const FAQComponent = ({ faqData }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="faq-container">
      {faqData.map((faq, index) => (
        <div key={index} className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h3>{faq.question}</h3>
            <button className="toggle-button">
              {expandedIndex === index ? 'x' : '+'}
            </button>
          </div>
          {expandedIndex === index && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;
