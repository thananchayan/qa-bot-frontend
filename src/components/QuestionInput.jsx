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
      <div className="input-wrapper">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={
            disabled
              ? "📤 Upload a PDF first to ask questions"
              : "💭 Ask something about your document..."
          }
          rows="4"
          disabled={disabled || loading}
        />
      </div>
      <button
        type="submit"
        disabled={!question.trim() || loading || disabled}
        className="submit-btn"
      >
        {loading ? "🔍 Searching..." : "Send 🚀"}
      </button>
    </form>
  );
}

export default QuestionInput;
