import { formacao } from '../data'
import styles from './Formacao.module.scss'

export default function Formacao() {
  return (
    <section className={styles.section} id="formacao">
      <div className="container">
        <p className="section-tag anim">Educação</p>
        <h2 className="section-title anim d1">Formação <em>acadêmica</em></h2>
        <p className="section-subtitle anim d2">Base sólida que sustenta a atuação técnica e estratégica.</p>

        <div className={styles.grid}>
          {formacao.map((f, i) => (
            <div key={i} className={`${styles.card} anim d${i + 1}`}>
              <div className={styles.cardHeader}>
                <div className={styles.icon}>🎓</div>
                <div>
                  <span className={styles.periodo}>{f.periodo}</span>
                  <h3 className={styles.curso}>{f.curso}</h3>
                </div>
              </div>
              <p className={styles.instituicao}>{f.instituicao}</p>
              <p className={styles.descricao}>{f.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
