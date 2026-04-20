import { especializacoes } from "../data";
import styles from "./Especializacoes.module.scss";

export default function Especializacoes() {
  return (
    <section className={styles.section} id="especializacoes">
      <div className="container">
        <p className="section-tag anim">Capacitação</p>
        <h2 className="section-title anim d1">Especializações</h2>
        <p className="section-subtitle anim d2">
          Aprendizado contínuo como forma de entrega de valor.
        </p>

        <div className={styles.grid}>
          {especializacoes.map((e, i) => (
            <div key={i} className={`${styles.item} anim d${(i % 6) + 1}`}>
              <div className={styles.itemInner}>
                <span className={styles.ano}>{e.ano}</span>
                <h3 className={styles.nome}>{e.nome}</h3>
                <p className={styles.inst}>{e.instituicao}</p>
              </div>
              <div className={styles.corner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
