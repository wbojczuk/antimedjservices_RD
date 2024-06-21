import styles from "./pagetitle.module.css"

export default function PageTitle(props: {pageTitle: string}) {
  return (
    <header className={styles.pageTitle}>
        <h1>{props.pageTitle}<span className="highlight">.</span></h1>

        <img src="/img/pagetitle-bg.webp" className="bg-img" aria-hidden />
        <div className="shader"></div>
    </header>
  )
}
