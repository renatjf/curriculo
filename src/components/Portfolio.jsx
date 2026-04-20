import { portfolio } from '../data'
import styles from './Portfolio.module.scss'

export default function Portfolio() {
  return (
    <section className={styles.section} id="portfolio">
      <div className="container">
        <p className="section-tag anim">Trabalhos</p>
        <h2 className="section-title anim d1">Meu <em>Portfólio</em></h2>
        <p className="section-subtitle anim d2">
          Projetos que demonstram minha experiência em desenvolvimento web, interfaces responsivas e soluções orientadas a resultados.
        </p>

        <div className={styles.grid}>
          {portfolio.map((item, index) => (
            <article key={index} className={`${styles.card} anim d${(index % 6) + 1}`}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{item.titulo}</h3>
                <p className={styles.cardMeta}>{item.papel}</p>
              </div>

              <p className={styles.cardDescription}>{item.descricao}</p>

              <div className={styles.tags}>
                {item.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className={styles.linkBtn}
              >
                {item.urlLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
