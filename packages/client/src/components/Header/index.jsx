/* eslint-disable no-confusing-arrow */
import { NavLink } from 'react-router-dom';

import style from './index.module.css';

/**
 * Header
 *
 * @return {object} JSX
 */
function Header() {
  return (
    <header class={style.header}>
      <nav class={style.submenu}>
        <ul>
          <li>
            <NavLink
              to="/"
              class={({ isActive }) => isActive ? style.active : undefined}
              end
            >Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/director"
              class={({ isActive }) => isActive ? style.active : undefined}
            >Director
            </NavLink>
          </li>
          <li>
            <NavLink
              class={({ isActive }) => isActive ? style.active : undefined}
              to="/genre"
            >Genre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/title"
              class={({ isActive }) => isActive ? style.active : undefined}
            >Title
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/writer"
              class={({ isActive }) => isActive ? style.active : undefined}
            >Writer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/year"
              class={({ isActive }) => isActive ? style.active : undefined}
            >Year
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              class={({ isActive }) => isActive ? style.active : undefined}
            >About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
