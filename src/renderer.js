import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => <h1>Hello from React!</h1>;

// createRoot 사용
const root = createRoot(document.getElementById('root'));
root.render(<App />);
