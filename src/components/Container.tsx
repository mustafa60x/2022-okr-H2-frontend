import styles from './Container.module.scss';

function Container({ children }) {
    return (
        <div className={ `${styles.container} px-4 py-2` }>
            {children}
        </div>
    )
}

export default Container