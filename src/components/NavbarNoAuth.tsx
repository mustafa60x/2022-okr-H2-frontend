import styles from './NavbarNoAuth.module.scss';

import { Link, NavLink } from "react-router-dom";
import { useSite } from '../context';

function Navbar() {
  const { theme, dispatch } = useSite();

  return (
    <div className={ `${styles.navbar} ${theme === 'dark' ? 'bg-gray-300' : 'bg-gray-100'} shadow-lg` }>
      <div className={ styles.navHeader }>
        <span className={ `${styles.logoLink} hiddenMobile` }>
          <Link to="/auth/login">Logo</Link>
        </span>

        <span className='px-5 py-2 bg-yellow-300 font-semibold rounded-lg w-full mx-5 flex justify-center'>Reklam</span>

        <ul className={styles.mainMenu}>
            <li>
              <NavLink to="/auth/login" className={({ isActive }) => isActive ? styles.activeNavbarLink : null}>Giriş</NavLink>
            </li>
            <li>
              <NavLink to="/auth/signup" className={({ isActive }) => isActive ? styles.activeNavbarLink : null}>Kayıt</NavLink>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar