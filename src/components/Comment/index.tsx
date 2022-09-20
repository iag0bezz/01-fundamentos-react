import { ThumbsUp, Trash } from 'phosphor-react';
import { Comment as CommentType } from '../../App';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';

import { format, formatDistanceToNow } from 'date-fns';
import pt_BR from 'date-fns/locale/pt-BR'

interface IProps {
  comment: CommentType;
  deleteComment: (id: number) => void;
}

export const Comment = ({ comment, deleteComment }: IProps) => {
  const published_date_formatted = format(
    comment.published_at,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: pt_BR
    }
  ) 

  const published_date_RTN = formatDistanceToNow(
    comment.published_at,
    {
      locale: pt_BR,
      addSuffix: true
    }
  )

  return (
    <div className={styles.comment}>
      <Avatar border={false} url={comment.author.avatar_url} />

      <div className={styles.box}>
        <div className={styles.content}>
          <header>
            <div className={styles.author}>
              <strong>{comment.author.name}</strong>
              <time
                title={published_date_formatted}
                dateTime={comment.published_at.toISOString()}
              >
                {published_date_RTN}
              </time>
            </div>

            <button onClick={() => deleteComment(comment.id)} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{comment.content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>{comment.likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}