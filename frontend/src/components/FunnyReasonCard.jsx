// src/components/FunnyReasonCard.jsx

import React from 'react';
import { motion } from 'framer-motion';

function FunnyReasonCard({ title, description, date }) {
  return (
    <motion.div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        marginBottom: "12px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9"
      }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <small>{date}</small>
    </motion.div>
  );
}

export default FunnyReasonCard;
