import classnames from 'classnames';

import { page } from '../../../store/signals';

import styles from './index.module.css';

/**
 * PageNumber
 *
 * @param {object} { number, disabled }
 * @return {object} JSX
 */
function PageNumber({ number, disabled }) {

  const classes = classnames([
    styles.pageNumber,
    page.value === number && styles.selected,
    disabled && styles.disabled
  ]);

  return (
    <div className={classes} data-id="number" data-number={number}>
      {number}
    </div>
  );

}

export default PageNumber;
