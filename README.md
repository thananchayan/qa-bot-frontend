# AI Document QA Bot - Frontend

A modern React + Vite frontend for the AI Document QA Bot, featuring PDF upload and intelligent question-answering powered by RAG (Retrieval Augmented Generation).

## Features

✨ **Key Features:**

- 📄 PDF file upload with drag-and-drop support
- 🤖 AI-powered question answering using LangChain and Google Gemini
- 💾 Vector embeddings storage with ChromaDB
- 🎨 Modern, responsive UI with dark mode
- ⚡ Fast development with Vite
- 📱 Mobile-friendly design
- 🔄 Real-time loading states and error handling
- 📋 Copy and download answers

## Getting Started

### Prerequisites

- Node.js 16+ (recommended 18+)
- npm or yarn package manager

### Installation

1. **Clone or download the frontend**

   ```bash
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure backend URL**

   Create a `.env` file in the root directory:

   ```env
   VITE_BACKEND_URL=http://localhost:8000
   ```

   For Hugging Face Space deployment:

   ```env
   VITE_BACKEND_URL=https://yourusername-your-space-name.hf.space
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Development

### Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally


## Building for Production

### Build Locally

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Docker Build

```bash
docker build -t ai-qa-frontend .
docker run -p 3000:3000 ai-qa-frontend
```

## API Integration

The frontend communicates with the backend through the following endpoints:

### Upload PDF

- **POST** `/upload`
- Upload a PDF file to create a knowledge base
- Request: `FormData` with file
- Response: `{ message: "PDF uploaded successfully" }`

### Ask Question

- **POST** `/ask`
- Ask a question about the uploaded document
- Request: `{ question: string }`
- Response: `{ answer: string }`

## Technologies Used

- **React 18** - UI framework
- **Vite 5** - Build tool
- **Axios** - HTTP client
- **CSS3** - Styling with modern features
- **Docker** - Containerization
