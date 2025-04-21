import { useState } from "react";
import { motion } from "framer-motion";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Funny Homework Excuses</h1>
      <div className="card">
        <button onClick={generateExcuse}>
          Generate Random Excuse
        </button>
        {randomExcuse && (
          <motion.p 
            className="text-lg font-semibold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {randomExcuse}
          </motion.p>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
