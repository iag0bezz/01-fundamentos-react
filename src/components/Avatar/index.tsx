import styles from './styles.module.css';

interface IProps {
  url: string;
  border?: boolean;
}

export const Avatar = ({ url, border = true }: IProps) => {
  return (
    <img
      className={border ? styles.border : styles.avatar}
      src={url}
    />
  )
}