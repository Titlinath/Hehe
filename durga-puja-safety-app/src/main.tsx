import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Note: App.jsx is a JavaScript file. If you are using TypeScript, consider renaming it to App.tsx or adding a declaration file for better type support.
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
