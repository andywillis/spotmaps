import { render } from 'preact';
import { StrictMode } from 'preact/compat';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import ScrollTop from './components/ScrollTop';

import './index.css';

function getRoot() {
  return (
    <StrictMode>
      <Router>
        <ScrollTop>
          <App />
        </ScrollTop>
      </Router>
    </StrictMode>
  );
}

render(getRoot(), document.getElementById('root'));
