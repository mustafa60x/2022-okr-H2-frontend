import styles from './NavbarNoAuth.module.scss';

import { Link } from "react-router-dom";

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
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar