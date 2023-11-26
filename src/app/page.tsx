
import Image from 'next/image'
import styles from './page.module.css'
import Loader from "@/components/atoms/loader";

export default function Home() {
  return (
    <main className={styles.main}>
      <a href="/api/auth/login">Login</a>
        <Loader />
    </main>
  )
}
