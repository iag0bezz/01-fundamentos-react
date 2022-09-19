import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar border={false} url='https://github.com/ianlibanio.png' />

      <div className={styles.box}>
        <div className={styles.content}>
          <header>
            <div className={styles.author}>
              <strong>Ian Libânio</strong>
              <time
                title='19 de Setembro de 2022'
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Diego, parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}