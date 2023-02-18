import style from './index.module.css';

export default function Spinner() {
  return (
    <div className={style.loading}>
      <div className={style.loader} />
    </div>
  );
}
