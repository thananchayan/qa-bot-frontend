import "./AnswerDisplay.css";

function AnswerDisplay({ answer }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(answer);
  };

  return (
    <div className="answer-display">
      <h3>Answer</h3>
      <p>{answer}</p>
      <button onClick={copyToClipboard}>Copy</button>
    </div>
  );
}

export default AnswerDisplay;
