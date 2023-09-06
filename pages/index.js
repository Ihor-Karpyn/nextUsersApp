import styles from '../styles/Home.module.css';
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Link href={'/users'}>
          Users
        </Link>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>
        </main>
    </div>
  )
}
