import "./AnswerDisplay.css";

function AnswerDisplay({ answer }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(answer);
  };

  return (
    <div className="answer-display">
      <div className="answer-header">
        <h3>📝 Answer</h3>
      </div>
      <p className="answer-text">{answer}</p>
      <button className="copy-btn" onClick={copyToClipboard}>
        📋 Copy to Clipboard
      </button>
    </div>
  );
}

export default AnswerDisplay;
