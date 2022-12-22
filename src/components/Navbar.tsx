import styles from './Navbar.module.scss';

function Navbar() {

  return (
    <div className={ styles.navbar }>
      <div className={ styles.navHeader }>
        <span className={ `${styles.logoLink} hiddenMobile` }><a>Logo</a></span>

        <ul className={styles.mainMenu}>
            <li><a>Community</a></li>
            <li><a>Messages</a></li>
            <li><a>Profile</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar