import styles from '../../styles/Home.module.css'

type Props = {
  title: string
}

const barney = 'beagle'

export default function Home({ title = 'React Avançado' }: Props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to {title}</h1>
      </main>
    </div>
  )
}
