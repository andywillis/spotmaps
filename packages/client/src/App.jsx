import { useEffect } from 'preact/hooks';
import { lazy, Suspense } from 'preact/compat';
import { useSetRecoilState } from 'recoil';

import Footer from './components/Footer';
import Header from './components/Header';
import Spinner from './components/Spinner';

import {
  libraryAtom,
  filteredLibraryAtom,
  numberOfPagesAtom
} from './store/atoms';

const Main = lazy(() => import('./components/Main'));

/**
 * App
 *
 * @return {object} JSX
 */
function App() {

  const setLibrary = useSetRecoilState(libraryAtom);
  const setFilteredLibrary = useSetRecoilState(filteredLibraryAtom);
  const setNumberOfPages = useSetRecoilState(numberOfPagesAtom);

  useEffect(() => {
    async function getData() {
      const response = await fetch('/library');
      const library = await response.json();
      setLibrary(library);
      setFilteredLibrary(library);
      setNumberOfPages(library.length);
    }
    getData();
  }, [ setLibrary, setFilteredLibrary, setNumberOfPages ]);

  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Main />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
