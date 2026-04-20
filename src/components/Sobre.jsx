import { personal } from "../data";
import styles from "./Sobre.module.scss";

const InfoItem = ({ icon, label, value, href }) => (
  <div className={`${styles.infoItem} anim`}>
    <span className={styles.infoIcon}>{icon}</span>
    <div>
      <span className={styles.infoLabel}>{label}</span>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={styles.infoValue}
        >
          {value}
        </a>
      ) : (
        <span className={styles.infoValue}>{value}</span>
      )}
    </div>
  </div>
);

export default function Sobre() {
  return (
    <section className={styles.section} id="sobre">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className="section-tag anim">Quem sou eu</p>
            <h2 className="section-title anim d1">
              Sobre <em>mim</em>
            </h2>
            {personal.sobre.split("\n\n").map((p, i) => (
              <p key={i} className={`${styles.text} anim d${i + 2}`}>
                {p}
              </p>
            ))}
          </div>

          <div className={styles.right}>
            <div className={styles.infoCard}>
              <h3 className={`${styles.cardTitle} anim`}>
                Informações de contato
              </h3>
              <div className={styles.infoList}>
                <InfoItem
                  icon={
                    <span className="material-symbols-outlined">
                      wifi_calling_bar_3
                    </span>
                  }
                  label="Celular"
                  value={personal.celular}
                  href={`tel:${personal.celular.replace(/\D/g, "")}`}
                />
                <InfoItem
                  icon={
                    <span className="material-symbols-outlined">
                      alternate_email
                    </span>
                  }
                  label="E-mail"
                  value={personal.email}
                  href={`mailto:${personal.email}`}
                />
                <InfoItem
                  icon={
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  }
                  label="Cidade"
                  value={personal.cidade}
                />
                <InfoItem
                  icon={<span className="material-symbols-outlined">link</span>}
                  label="LinkedIn"
                  value={personal.linkedinLabel}
                  href={personal.linkedin}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
