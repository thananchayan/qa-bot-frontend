import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div className="loading-spinner">
      <div className="spinner-container">
        <div className="spinner"></div>
        <p className="loading-text">Searching your document...</p>
        <p className="loading-subtitle">This may take a few seconds</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
