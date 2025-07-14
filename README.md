# Code Reviewer

A full-stack AI-powered code review tool.  
Write or paste your code in the editor, click **Review**, and get instant, detailed feedback from an AI code reviewer.

---

## Features

- 📝 **Live Code Editor** with syntax highlighting (powered by PrismJS)
- 🤖 **AI Code Review** using Google Gemini API
- 📋 **Actionable Feedback**: Best practices, bug detection, readability, and more
- ⚡ **Modern UI** with React and Material UI
- 🔄 **Separation of Concerns**: Clean backend (Node.js/Express) and frontend (React)

---

## Tech Stack

- **Frontend:** React, react-simple-code-editor, PrismJS, Material UI, Axios, react-markdown
- **Backend:** Node.js, Express, Google Gemini API, dotenv, cors

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/code-reviewer.git
cd code-reviewer
```

### 2. Setup the Backend

```sh
cd Backend
npm install
```

- Create a `.env` file in the `Backend` directory:
  ```
  GOOGLE_GEMINI_KEY=your_google_gemini_api_key
  ```

- Start the backend server:
  ```sh
  node server.js
  # or for development:
  npx nodemon server.js
  ```

### 3. Setup the Frontend

```sh
cd ../Frontend
npm install
npm run dev
```

- The frontend will run on [http://localhost:5173](http://localhost:5173)
- The backend defaults to [http://localhost:5000](http://localhost:5000)

---

## Usage

1. Open [http://localhost:5173](http://localhost:5173) in your browser.
2. Enter or paste your code in the editor.
3. Click the **Review** button.
4. View the AI-generated review and suggestions on the right panel.

---

## Project Structure

```
Backend/
  src/
    controllers/
    routes/
    services/
  server.js
  .env
Frontend/
  src/
    App.jsx
    App.css
  ...
```

---

## Customization

- **System Instruction:**  
  You can customize the AI’s review style and guidelines in `Backend/src/services/ai.service.js` under the `systemInstruction` property.

---

## Troubleshooting

- **Network Error:**  
  Ensure the backend is running and CORS is enabled.
- **404 Error:**  
  Make sure the frontend API URL matches the backend route and port.
- **AI API Issues:**  
  Check your API key and usage limits.

---

## License

MIT

---

## Credits

- [react-simple-code-editor](https://github.com/satya164/react-simple-code-editor)
- [PrismJS](https://prismjs.com/)
- [Material UI](https://mui.com/)
- [Google Gemini API](https://ai.google.dev/)

---
