import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './styles.module.css';

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar url='https://github.com/diego3g.png' />

          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time
          title='19 de Setembro de 2022'
        >
          Publicado á 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>
          <a href='#'>
            jane.design/doctorcare
          </a>
        </p>
        <p>
          <a href='#'>
            #novoprojeto
          </a> {' '}
          <a href='#'>
            #nlw
          </a>  {' '}
          <a href='#'>
            #rocketseat
          </a>
        </p>
      </div>
      
      <form className={styles.comment}>
        <strong>Deixe seu feedback</strong>
        
        <textarea 
          placeholder='Deixa um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.comments}>
        <Comment />
        <Comment />
      </div>
    </article>
  )
}