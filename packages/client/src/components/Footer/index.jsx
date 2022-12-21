import styles from './index.module.css';

export default function Footer() {
  return (
    <footer class={styles.footer}>
      &copy; Andy Willis {new Date().getFullYear()}
    </footer>
  );
}
