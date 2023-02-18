import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';

/**
 * Layout
 *
 * @return {object} JSX
 */
function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default Layout;
