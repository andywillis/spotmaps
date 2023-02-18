import { useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';

import { typeSelector } from '../../store/selectors';

import style from './index.module.css';

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
      <Link key={value} className={style.wrapper} to={link}>
        <div className={style.link}>
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

  console.log(typeList);

  return (
    <div className={style.wrapper}>
      {formatItems(type, typeList)}
    </div>
  );

}

export default List;
