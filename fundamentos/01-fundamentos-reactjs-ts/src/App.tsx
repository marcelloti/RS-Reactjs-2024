import { Post, PostType } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/marcelloti.png',
      name: "Marcello Costa",
      role: "Developer"
    },
    content: [
      {
        type: 'paragraph',
        content: "Fala galera"
      },
      {
        type: 'paragraph',
        content: "Lorem ipsum"
      },
      {
        type: 'link',
        content: "https://github.com/marcelloti"
      },
    ],
    publishedAt: new Date('2024-02-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/marcelloti.png',
      name: "John Doe",
      role: "NoOne"
    },
    content: [
      {
        type: 'paragraph',
        content: "Fala galera"
      },
      {
        type: 'paragraph',
        content: "Lorem ipsum"
      },
      {
        type: 'link',
        content: "https://github.com/marcelloti"
      },
    ],
    publishedAt: new Date('2024-03-10 20:00:00')
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
