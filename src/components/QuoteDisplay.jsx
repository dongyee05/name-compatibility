import React from "react";
import "../styles/quoteDisplay.css";

export const QuoteDisplay = ({ quote }) => {
  return (
    <div className="quote-container">
      <p className="quote-text">❝ {quote} ❞</p>
    </div>
  );
};
