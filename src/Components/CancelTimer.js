import "./CancelTimer.css";

const CancelTimer = ({ handleClick }) => {
  return (
    <div className="cancel-timer-button">
      <button onClick={handleClick}>Cancel Timer</button>
    </div>
  );
};

export default CancelTimer;
