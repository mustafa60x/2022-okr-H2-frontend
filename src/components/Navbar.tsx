import styles from './Navbar.module.scss';

import { Outlet, Link } from "react-router-dom";

function Navbar() {

  return (
    <div className={ styles.navbar }>
      <div className={ styles.navHeader }>
        <span className={ `${styles.logoLink} hiddenMobile` }>
          <Link to="/community">Logo</Link>
        </span>

        <ul className={styles.mainMenu}>
            <li>
              <Link to="/community">Community</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar