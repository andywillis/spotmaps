import style from './index.module.css';

export default function Footer() {
  return (
    <footer className={style.footer}>
      &copy; Andy Willis {new Date().getFullYear()}
    </footer>
  );
}
