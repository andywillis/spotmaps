import { effect } from '@preact/signals';
// import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';

import { pageType } from '../../signals/signals';
import { typeSelector } from '../../signals/selectors';

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

  effect(() => {
    pageType.value = type;
  });

  return (
    <div className={styles.wrapper}>
      {formatItems(type, typeSelector.value)}
    </div>
  );

}

export default List;
