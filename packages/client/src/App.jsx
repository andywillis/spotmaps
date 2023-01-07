import { effect } from '@preact/signals';
// import { useEffect } from 'preact/hooks';
// import { useSetRecoilState } from 'recoil';

import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';

import api from './signals/api';

/**
 * App
 *
 * @return {object} JSX
 */
function App() {

  effect(() => {
    api.getLibrary();
  });

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
