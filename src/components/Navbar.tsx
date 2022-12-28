import styles from './Navbar.module.scss';

import { Link, NavLink } from "react-router-dom";
import { useSite } from '../context';

function Navbar() {
  const { theme, dispatch } = useSite();

  return (
    <div className={ `${styles.navbar} ${theme === 'dark' ? 'bg-gray-300' : 'bg-gray-100'} shadow-lg` }>
      <div className={ styles.navHeader }>
        <span className={ `${styles.logoLink} hiddenMobile` }>
          <Link to="/community">Logo</Link>
        </span>

        <ul className={styles.mainMenu}>
            <li>
              <NavLink to="/community" className={({ isActive }) => isActive ? styles.activeNavbarLink : null}>Topluluk</NavLink>
            </li>
            <li>
              <NavLink to="/messages" className={({ isActive }) => isActive ? styles.activeNavbarLink : null}>Mesajlar</NavLink>
            </li>
            <li>
              <NavLink to="/profile" className={({ isActive }) => isActive ? styles.activeNavbarLink : null}>Profil</NavLink>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar