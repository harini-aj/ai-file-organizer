# 🗂️ AI File Organizer & Search Tool

An AI-powered file manager that summarizes your documents and enables smart semantic search using Large Language Models (LLMs) and vector databases.

## 🚀 Features

- 📤 Upload and parse PDF, DOCX, and TXT files
- 🧠 LLM-powered file summarization and tag generation
- 🔍 Semantic search with vector embeddings (FAISS / ChromaDB)
- 💾 Redux-based state management and filters
- 🖼️ Clean and responsive UI with TailwindCSS
- 🔐 Optional Firebase authentication

## 🧱 Tech Stack

Frontend:
- React + Redux Toolkit
- TailwindCSS
- Axios / React Query

Backend:
- Node.js + Express (or FastAPI)
- OpenAI GPT API or local LLM
- FAISS / Chroma for vector search
- pdf-parse, mammoth for text extraction

Extras:
- Firebase Auth or Supabase (Optional)
- Vercel & Railway for deployment

## 📦 Installation

```bash
git clone https://github.com/your-username/ai-file-organizer.git
cd ai-file-organizer
