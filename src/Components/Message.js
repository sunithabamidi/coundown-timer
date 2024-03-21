import "./Message.css";

const Message = ({ reason }) => {
  return (
    <div className="message">
      <p>{reason}</p>
    </div>
  );
};

export default Message;
