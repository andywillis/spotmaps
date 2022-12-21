import styles from './index.module.css';

export default function Spinner() {
  return (
    <div class={styles.loading}>
      <div class={styles.loader} />
    </div>
  );
}
