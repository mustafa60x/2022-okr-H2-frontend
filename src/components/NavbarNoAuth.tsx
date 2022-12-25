import styles from './NavbarNoAuth.module.scss';

import { Link, NavLink } from "react-router-dom";

function Navbar() {

  return (
    <div className={ styles.navbar }>
      <div className={ styles.navHeader }>
        <span className={ `${styles.logoLink} hiddenMobile` }>
          <Link to="/community">Logo</Link>
        </span>

        <span className='px-5 py-2 bg-yellow-300 font-semibold rounded-lg w-full mx-5 flex justify-center'>Reklam</span>

        <ul className={styles.mainMenu}>
            <li>
              <NavLink to="/auth/login" className={({ isActive }) => isActive ? styles.activeNavbarLink : null}>Login</NavLink>
            </li>
            <li>
              <NavLink to="/auth/signup" className={({ isActive }) => isActive ? styles.activeNavbarLink : null}>Signup</NavLink>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar