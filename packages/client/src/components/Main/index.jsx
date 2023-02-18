import style from './index.module.css';

/**
 * Main
 *
 * @return {object} JSX
 */
function Main({ children }) {
  return (
    <main className={style.main}>
      {children}
    </main>
  );
}

export default Main;
