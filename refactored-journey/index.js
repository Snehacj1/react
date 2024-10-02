// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
