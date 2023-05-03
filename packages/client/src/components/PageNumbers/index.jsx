import PageNumber from './PageNumber';
import Directional from './Directional';

import { page, numberOfPages } from '../../store/signals';

import styles from './index.module.css';

/**
 * buildPageList
 *
 * @param {object} { page, numberOfPages }
 * @return {array} Array of Page components
 */
function buildPageList(page, numberOfPages) {

  const pages = [];

  let start = 0;
  let end = 0;

  if (numberOfPages < 5) {
    start = 1;
    end = numberOfPages;
  } else if (numberOfPages >= 5 && page < 3) {
    start = 1;
    end = 5;
  } else {
    start = page - 2;
    end = page + 2;
    if (page > (numberOfPages - 3)) {
      start = numberOfPages - 4;
      end = numberOfPages;
    }
  }

  for (let i = start; i <= end; i++) {
    pages.push(<PageNumber key={i} number={i} />);
  }

  return pages;

}

/**
 * PageNumbers
 *
 * @return {object} JSX
 */
function PageNumbers() {

  /**
   * handleClick
   *
   * @param {object} e - Event
   */
  function handleClick(e) {

    const { dataset: { disabled, number, id } } = e.target;

    const isDisabled = disabled === 'true';

    if (id) {
      switch (id) {
        case 'number': {
          page.value = parseInt(number, 10);
          break;
        }
        case 'rwd': {
          if (!isDisabled) page.value = 1;
          break;
        }
        case 'previous': {
          if (!isDisabled) page.value -= 1;
          break;
        }
        case 'next': {
          if (!isDisabled) page.value += 1;
          break;
        }
        case 'ffd': {
          if (!isDisabled) page.value = numberOfPages.value;
          break;
        }
        default: break;
      }

    }
  }

  return (
    <nav role="presentation" className={styles.pageNumbers} onClick={handleClick}>
      <Directional type="rwd" />
      <Directional type="previous" />
      {numberOfPages > 1
        ? buildPageList(page.value, numberOfPages.value)
        : <PageNumber page="1" number="1" disabled />}
      <Directional type="next" />
      <Directional type="ffd" />
    </nav>
  );

}

export default PageNumbers;
