import { useState } from "react";
import "./QuestionInput.css";

function QuestionInput({ onSubmit, loading, disabled }) {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() && !loading && !disabled) {
      onSubmit(question);
      setQuestion("");
    }
  };

  return (
    <form className="question-form" onSubmit={handleSubmit}>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder={disabled ? "Upload a PDF first" : "Ask a question..."}
        rows="3"
        disabled={disabled || loading}
      />
      <button type="submit" disabled={!question.trim() || loading || disabled}>
        {loading ? "Searching..." : "Send"}
      </button>
    </form>
  );
}

export default QuestionInput;
