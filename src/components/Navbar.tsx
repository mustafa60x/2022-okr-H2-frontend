import styles from './Navbar.module.scss';

import { Link, NavLink } from "react-router-dom";
import { useSite } from '../context';

import useNotificationStore from "../store/notification";

function Navbar() {
  const { theme, dispatch } = useSite();

  const { counter: NotificationCounter } = useNotificationStore((state) => state);

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
            <li className='relative'>
              <NavLink to="/messages" className={({ isActive }) => isActive ? styles.activeNavbarLink : null}>Mesajlar</NavLink>
              
              {NotificationCounter > 0 && <span className='flex justify-center items-center absolute w-[20px] h-[20px] top-2 right-2 p-1 text-xs text-slate-100 bg-red-500 rounded-full'>{NotificationCounter}</span>}
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