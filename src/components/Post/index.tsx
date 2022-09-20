import { Post as PostType } from '../../App';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './styles.module.css';

import { format, formatDistanceToNow } from 'date-fns';
import pt_BR from 'date-fns/locale/pt-BR'
import { useCallback, useState } from 'react';

type IProps = {
  post: PostType
}

export const Post = ({ post }: IProps) => {
  const [value, setValue] = useState('');

  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  const published_date_formatted = format(
    post.published_at,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: pt_BR
    }
  )

  const published_date_RTN = formatDistanceToNow(
    post.published_at,
    {
      locale: pt_BR,
      addSuffix: true
    }
  )

  const handleCommentChange = (event: any) => {
    setValue(event.target.value);
    event.target.customValidity('');
  }

  const handleDeleteComment = (id: number) => {
    post.comments = post.comments.filter(
      comment => comment.id !== id
    )

    forceUpdate()
  }

  const handleNewComment = () => {
    event?.preventDefault();

    post.comments.push({
      id: new Date().getTime(),
      author: {
        avatar_url: 'https://github.com/iag0bezz.png',
        name: 'Iago Beserra',
        role: 'Web Developer',
      },
      content: value,
      likes: 0,
      published_at: new Date(),
    })

    setValue('')
  }

  const handleInvalidComment = (event: any) => {
    event.target.setCustomValidity('Este campo é obrigatório');
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar url={post.author.avatar_url} />

          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={published_date_formatted}
          dateTime={post.published_at.toISOString()}
        >
          {published_date_RTN}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map(
          (line) => {
            if (line.type === 'paragraph') {
              return <p>{line.content}</p>
            } else if (line.type === 'link') {
              return <p>
                <a href="">{line.content}</a>
              </p>
            }
          }
        )}
      </div>
      
      <form onSubmit={handleNewComment} className={styles.comment}>
        <strong>Deixe seu feedback</strong>
        
        <textarea 
          placeholder='Deixa um comentário'
          value={value}
          onChange={handleCommentChange}
          required
          onInvalid={handleInvalidComment}
        />

        <footer>
          <button disabled={value.length === 0} type='submit'>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.comments}>
        {post.comments.map(
          (comment) => {
            return (
              <Comment
                key={comment.id}
                comment={comment}
                deleteComment={handleDeleteComment}
              />
            )
          }
        )}
      </div>
    </article>
  )
}