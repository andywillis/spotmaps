import { render } from 'preact';
import { StrictMode } from 'preact/compat';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import ScrollTop from './components/ScrollTop';

import './index.css';

function getRoot() {
  return (
    <StrictMode>
      <RecoilRoot>
        <Router>
          <ScrollTop>
            <App />
          </ScrollTop>
        </Router>
      </RecoilRoot>
    </StrictMode>
  );
}

render(getRoot(), document.getElementById('root'));
