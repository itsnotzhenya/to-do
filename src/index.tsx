import React from 'react';
import ReactDOM from 'react-dom/client';

const rootNode = document.getElementById('root');

rootNode &&
  ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
      <h1>TO DO List</h1>
    </React.StrictMode>
  );
