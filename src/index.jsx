import App from './App';


import React from 'react';
import ReactDOM from 'react-dom/client';


const $ = selector => document.querySelector(selector);

const $root = $('#root');

const rRoot = ReactDOM.createRoot($root);

rRoot.render(<App />);