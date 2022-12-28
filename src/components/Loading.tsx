/* import styles from './Loading.module.scss';
import useSiteStore from "../store/site"

function SuccessMessagePopup() {

  const { isLoading } = useSiteStore(state => state)

  return (
    <div>
      { isLoading && <div className={`flex justify-center text-lg items-center ${styles.blink}`}><span>Loading..</span></div>}
    </div>
  );
}

export default SuccessMessagePopup; */

import styles from './Loading.module.scss';
import useSiteStore from "../store/site"

function SuccessMessagePopup() {

  const { isLoading } = useSiteStore(state => state)

  return (
    <div>
      { isLoading && <div className={`flex justify-center text-5xl items-center ${styles.blink}`}><span className='text-white'>Yükleniyor..</span></div>}
    </div>
  );
}

export default SuccessMessagePopup;