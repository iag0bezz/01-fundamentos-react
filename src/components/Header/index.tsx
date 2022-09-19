import styles from './styles.module.css';

import logo from '../../assets/ignite-logo.svg';

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt='Logotipo do Ignite' />
    </div>
  )
}