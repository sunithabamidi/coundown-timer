import React, { useState, useEffect } from "react";
import "./StartTimer.css";

const StartTimer = ({ handleClick }) => {
  return (
    <div className="start-timer-button">
      <button onClick={handleClick}>Start Timer</button>
    </div>
  );
};

export default StartTimer;
