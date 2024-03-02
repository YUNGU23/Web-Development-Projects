import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const handleDS = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  };

  const handlePP = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  };

  const handleFF = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
    }
  };

  return (
    <>
      <div className="App">
        <div className="header">
          <h1>Samosa Selector</h1>
          <h2>Count: {count}</h2>
          <img
            className="samosa"
            src="https://helpful-griffin-0a0ba5.netlify.app/samosa.png"
            onClick={updateCount}
          />
        </div>
        <div className="cardContainer">
          <Card
            head="Double Stuffed 👯‍♀️"
            body="2x per click"
            button="10 samosas"
            event={handleDS}
            className="upgrade"
          />
          <Card
            head="Party Pack 🎉"
            body="5x per click"
            button="100 samosas"
            event={handlePP}
            className="upgrade"
          />
          <Card
            head="Full Feast 👩🏽‍🍳"
            body="10x per click"
            button="1000 samosas"
            event={handleFF}
            className="upgrade"
          />
        </div>
      </div>
    </>
  );
}

export default App;
