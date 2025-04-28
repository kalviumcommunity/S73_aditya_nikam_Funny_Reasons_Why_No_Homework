// src/App.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

// Funny excuses array
const excuses = [
  "My dog ate my homework!",
  "Aliens abducted my notebook!",
  "My little brother turned it into a paper airplane!",
  "The internet went down when I was about to start!",
  "I accidentally wrote it in invisible ink!",
];

export default function App() {
  const [randomExcuse, setRandomExcuse] = useState("");

  const generateExcuse = () => {
    const excuse = excuses[Math.floor(Math.random() * excuses.length)];
    setRandomExcuse(excuse);
  };

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh", 
      backgroundColor: "#f0f8ff",
      padding: "20px"
    }}>
      <h1 style={{ marginBottom: "20px", fontSize: "2.5rem", color: "#333" }}>
        Funny Homework Excuses
      </h1>

      <motion.div 
        className="card"
        style={{ backgroundColor: "#fff", padding: "30px", borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", textAlign: "center" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <button 
          onClick={generateExcuse}
          style={{ 
            backgroundColor: "#007BFF", 
            color: "#fff", 
            padding: "12px 24px", 
            border: "none", 
            borderRadius: "8px", 
            cursor: "pointer", 
            marginBottom: "20px", 
            fontSize: "1rem" 
          }}
        >
          Generate Random Excuse
        </button>

        {randomExcuse && (
          <motion.p 
            style={{ fontSize: "1.2rem", fontWeight: "600", color: "#555" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {randomExcuse}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
