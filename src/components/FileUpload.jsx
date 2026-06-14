import { useRef, useState } from "react";
import "./FileUpload.css";

function FileUpload({ onFileSelect, loading, isUploaded }) {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState(null);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type !== "dragleave");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file && file.type === "application/pdf") {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setFileName(file.name);
      onFileSelect(file);
    }
  };

  const handleClick = () => inputRef.current?.click();

  const handleReset = () => {
    setFileName(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="file-upload">
      <input
        ref={inputRef}
        type="file"
        accept=".pdf"
        onChange={handleChange}
        disabled={loading}
      />

      {!fileName ? (
        <div
          className={`upload-area ${dragActive ? "active" : ""}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <p>{loading ? "Uploading..." : "Drag PDF here or click"}</p>
        </div>
      ) : (
        <div className="file-info">
          <p>{fileName}</p>
          <p>{loading ? "Uploading..." : isUploaded ? "Uploaded" : "Ready"}</p>
          {!loading && <button onClick={handleReset}>Clear</button>}
        </div>
      )}
    </div>
  );
}

export default FileUpload;
