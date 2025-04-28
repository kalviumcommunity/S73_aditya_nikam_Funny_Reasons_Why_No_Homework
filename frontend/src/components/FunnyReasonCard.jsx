
import React from 'react';

function FunnyReasonCard({ title, description, date }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "16px",
      marginBottom: "12px",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9"
    }}>
      <h2 style={{ marginBottom: "8px" }}>{title}</h2>
      <p style={{ marginBottom: "4px" }}>{description}</p>
      <small style={{ color: "#666" }}>{date}</small>
    </div>
  );
}

export default FunnyReasonCard;
