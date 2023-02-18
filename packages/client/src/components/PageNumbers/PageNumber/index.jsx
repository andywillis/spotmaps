import { useRecoilValue } from 'recoil';
import classnames from 'classnames';

import { pageAtom } from '../../../store/atoms';

import style from './index.module.css';

/**
 * PageNumber
 *
 * @param {object} { number, disabled }
 * @return {object} JSX
 */
function PageNumber({ number, disabled }) {

  const page = useRecoilValue(pageAtom);

  const classes = classnames([
    style.pageNumber,
    page === number && style.selected,
    disabled && style.disabled
  ]);

  return (
    <div className={classes} data-id="number" data-number={number}>
      {number}
    </div>
  );

}

export default PageNumber;
