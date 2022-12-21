import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';

import { typeSelector } from '../../store/selectors';

import styles from './index.module.css';

/**
 * formatItems
 *
 * @param {string} type
 * @param {array} typeList
 * @return {object} JSX
 */
function formatItems(type, typeList) {
  return typeList.map((value) => {
    const link = `/${type}/${value}`;
    return (
      <Link key={value} class={styles.wrapper} to={link}>
        <div class={styles.link}>
          {value}
        </div>
      </Link>
    );
  });
}

/**
 * List
 *
 * @param {object} { type }
 * @return {object} JSX
 */
function List({ type }) {

  const typeList = useRecoilValue(typeSelector(type));

  return (
    <div class={styles.wrapper}>
      {formatItems(type, typeList)}
    </div>
  );

}

export default List;
