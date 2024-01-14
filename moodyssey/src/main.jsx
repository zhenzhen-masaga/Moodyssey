import React from 'react'
import ReactDOM from 'react-dom/client'
// You must import the screen/page you want to test first at this portion. Follow the line below.
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* For testing a screen/page, change 'App' below into the name of the screen/page you're modifying. Note: You should import the screen/page file first. */}
    <App />
  </React.StrictMode>,
)

// To run, open a terminal and change directory to 'moodyssey'
// After that, run this command 'npm run dev'