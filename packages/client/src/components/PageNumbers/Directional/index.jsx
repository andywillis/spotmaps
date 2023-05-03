import classnames from 'classnames';
import styles from './index.module.css';

import { page, numberOfPages } from '../../../store/signals';

/**
 * isDisabled
 *
 * @param {string} type
 * @param {string} page
 * @param {number} numberOfPages
 * @return {boolean} isDisabled
 */
function isDisabled(type, page, numberOfPages) {
  return ((type === 'rwd' || type === 'previous') && page === 1)
  || ((type === 'ffd' || type === 'next') && page === numberOfPages);
}

/**
 * Directional
 *
 * @param {object} { type }
 * @return {object} JSX
 */
function Directional({ type }) {

  const disabledStyle = (
    ((type === 'rwd' || type === 'previous') && page === 1)
    || ((type === 'ffd' || type === 'next') && page === numberOfPages)
  );

  const classes = classnames({
    [styles.directional]: true,
    [styles.previous]: type === 'previous',
    [styles.next]: type === 'next',
    [styles.disabled]: disabledStyle
  });

  function getType(directionType) {
    switch (directionType) {
      case 'rwd': return '<<';
      case 'ffd': return '>>';
      case 'previous': return '<';
      case 'next':
      default: return '>';
    }
  }

  return (
    <div
      className={classes}
      type="directional"
      data-id={type}
      data-disabled={isDisabled(type, page.value, numberOfPages.value)}
    >{getType(type)}
    </div>
  );
}

export default Directional;
