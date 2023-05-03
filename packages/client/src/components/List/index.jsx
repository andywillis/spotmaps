import { Link } from 'react-router-dom';

import { listType, getListByType } from '../../store/signals';

import styles from './index.module.css';

/**
 * formatItems
 *
 * @param {string} type
 * @param {array} typeList
 * @return {object} JSX
 */
function formatItems(type, typeSelector) {
  return typeSelector.map((value) => {
    const link = `/${type}/${value}`;
    return (
      <Link key={value} className={styles.wrapper} to={link}>
        <div className={styles.link}>
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

  listType.value = type;

  return (
    <div className={styles.wrapper}>
      {formatItems(listType.value, getListByType.value)}
    </div>
  );

}

export default List;
