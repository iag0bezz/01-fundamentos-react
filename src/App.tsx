import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css'
import { Post } from "./components/Post";

export type Comment = {
  id: number;
  author: {
    avatar_url: string;
    name: string;
    role: string;
  },
  content: string;
  likes: number;
  published_at: Date;
}

export type Post = {
  id: number;
  author: {
    avatar_url: string;
    name: string;
    role: string;
  },
  content: {
    type: string;
    content: string;
  }[],
  comments: Comment[],
  published_at: Date;
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatar_url: 'https://github.com/iag0bezz.png',
      name: 'Iago Beserra',
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no  meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      },
    ],
    comments: [],
    published_at: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatar_url: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no  meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat.'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      },
    ],
    comments: [
      {
        id: 1,
        author: {
          avatar_url: 'https://github.com/maykbrito.png',
          name: 'Mayk Briko',
          role: 'Educator @Rocketseat'
        },
        content: 'Parabéns, Diegão!!!',
        likes: 0,
        published_at: new Date('2022-09-20 08:50:00')
      }
    ],
    published_at: new Date('2022-05-03 20:00:00'),
  }
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          { posts.map(
            (post) => {
              return (
                <Post 
                  key={post.id}
                  post={post} 
                />
              )
            }
          ) }
        </main>
      </div>
    </div>
  )
}

export default App
