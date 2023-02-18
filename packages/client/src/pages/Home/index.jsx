import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';

import SpotmapList from '../../components/SpotmapList';

/**
 * Home
 *
 * @return {object} JSX
 */
function Home() {
  return (
    <>
      <Header />
      <Main>
        <SpotmapList />
      </Main>
      <Footer />
    </>
  );
}

export default Home;
