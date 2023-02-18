import { useEffect } from 'preact/hooks';
import { useSetRecoilState } from 'recoil';
import { Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Director from './pages/Director';
import Genre from './pages/Genre';
import Home from './pages/Home';
import Title from './pages/Title';
import Writer from './pages/Writer';
import Year from './pages/Year';

import {
  libraryAtom,
  filteredLibraryAtom,
  numberOfPagesAtom
} from './store/atoms';

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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:type/:value" element={<Home />} />
      <Route path="/director" element={<Director />} />
      <Route path="/genre" element={<Genre />} />
      <Route path="/title" element={<Title />} />
      <Route path="/writer" element={<Writer />} />
      <Route path="/year" element={<Year />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );

}

export default App;
