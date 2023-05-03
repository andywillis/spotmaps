import { useEffect } from 'preact/hooks';

import BaseLayout from './layouts/BaseLayout';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';

import {
  library,
  // filteredLibrary,
  numberOfPages
} from './store/signals';

/**
 * App
 *
 * @return {object} JSX
 */
function App() {

  useEffect(() => {
    async function getData() {
      const response = await fetch('/library');
      const data = await response.json();
      library.value = data;
      // filteredLibrary([...library]);
      numberOfPages(library.value.length);
    }
    getData();
  }, []);

  return (
    <BaseLayout>
      <Header />
      <Main />
      <Footer />
    </BaseLayout>
  );
}

export default App;
