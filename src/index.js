import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './stylesheets/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const express = require('express');
const app = express();
app.listen(3000, () => {
  console.log('El servidor está inicializado en el puerto 3000');
});

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
