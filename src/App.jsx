import { Header } from "./components/Header.jsx"
import { Post } from "./Post"
import styles from './App.module.css'
import "./global.css"
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          <Post
            author='LeliFlor'
            content='Lorem ipsum'
          />
          <Post
            author='Diego'
            content='Lorem ipsum'
          />
        </main>
      </div>
    </div>
  );
}