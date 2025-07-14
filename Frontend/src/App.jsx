import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import "prismjs/themes/prism-okaidia.css";
import prism from 'prismjs';
import Editor from 'react-simple-code-editor';
import axios from 'axios';
import Markdown from 'react-markdown';

import './App.css'

function App() {
 
  const [code,setCode] = useState(`function sum(){
  return 1+1;
}`);

const[review,setReview] = useState('');

  useEffect(()=>{
    prism.highlightAll();
  })
   async function reviewCode() {
  try {
    const response = await axios.post('http://localhost:5000/ai/review', { code });
    setReview(response.data);
  } catch (error) {
    setReview("Error: " + (error.response?.data?.error || error.message));
  }
}
     
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
                <Editor
                  value={code}
                  onValueChange={setCode}
                  highlight={code => prism.highlight(code, prism.languages.javascript, 'javascript')}
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                    border: '1px solid #ddd',
                    borderRadius: '5px',height: '100%',
                    width: '100%',
                    color: '#ffffff'
                  }}
                />
          </div>
          <div className="review">
             <Button variant="contained" onClick={reviewCode}>Review</Button>
          </div>
        </div>
        <div className="right">
       <Markdown>{review}</Markdown>
       </div>
      </main>
    </>
  )
}



export default App
