import styles from './Navbar.module.scss';

import { Link, NavLink } from "react-router-dom";

function Navbar() {

  return (
    <div className={ styles.navbar }>
      <div className={ styles.navHeader }>
        <span className={ `${styles.logoLink} hiddenMobile` }>
          <Link to="/community">Logo</Link>
        </span>

        <ul className={styles.mainMenu}>
            <li>
              <NavLink to="/community" className={({ isActive }) => isActive ? styles.activeNavbarLink : null}>Community</NavLink>
            </li>
            <li>
              <NavLink to="/messages" className={({ isActive }) => isActive ? styles.activeNavbarLink : null}>Messages</NavLink>
            </li>
            <li>
              <NavLink to="/profile" className={({ isActive }) => isActive ? styles.activeNavbarLink : null}>Profile</NavLink>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar