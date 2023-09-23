import Image from 'next/image'
import styles from './page.module.css'
import Shop from './shop/Shop'

export default function Home() {
  return (
    <main className={styles.main}>
     <Shop></Shop>
    </main>
  )
}
