import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header(){
    return (
        <header className={styles.header}>
            <img alt="Logotipo do Ignite" src={igniteLogo} />
        </header>
    );
}