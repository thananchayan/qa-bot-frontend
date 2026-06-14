import { useState } from "react";
import "./App.css";
import FileUpload from "./components/FileUpload";
import QuestionInput from "./components/QuestionInput";
import AnswerDisplay from "./components/AnswerDisplay";
import LoadingSpinner from "./components/LoadingSpinner";
import { uploadPDF, askQuestion } from "./api/client";

function App() {
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [error, setError] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileUpload = async (file) => {
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      await uploadPDF(formData);
      setFileUploaded(true);
    } catch (err) {
      setError(err.message || "Upload failed");
      setFileUploaded(false);
    } finally {
      setLoading(false);
    }
  };

  const handleAskQuestion = async (question) => {
    if (!question.trim()) return;
    if (!fileUploaded) {
      setError("Please upload a PDF first");
      return;
    }

    setLoading(true);
    setError(null);
    setAnswer(null);

    try {
      const response = await askQuestion(question);
      setAnswer(response.answer);
    } catch (err) {
      setError(err.message || "Failed to get answer");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Document QA</h1>
        <p>Ask questions about your PDFs</p>
      </header>

      <main className="main">
        {error && <div className="error-msg">{error}</div>}

        <div className="content">
          <div className="section">
            <h2>Upload PDF</h2>
            <FileUpload
              onFileSelect={handleFileUpload}
              loading={loading}
              isUploaded={fileUploaded}
            />
          </div>

          <div className="section">
            <h2>Ask Questions</h2>
            <QuestionInput
              onSubmit={handleAskQuestion}
              loading={loading}
              disabled={!fileUploaded}
            />
            {loading && <LoadingSpinner />}
            {answer && <AnswerDisplay answer={answer} />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
