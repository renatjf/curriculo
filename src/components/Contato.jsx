import { personal } from "../data";
import styles from "./Contato.module.scss";

const items = [
  {
    icon: <span class="material-symbols-outlined">wifi_calling_bar_3</span>,
    label: "Celular",
    value: personal.celular,
    href: `tel:${personal.celular.replace(/\D/g, "")}`,
  },
  {
    icon: <span class="material-symbols-outlined">alternate_email</span>,
    label: "E-mail",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: <span class="material-symbols-outlined">location_on</span>,
    label: "Localização",
    value: personal.cidade,
  },
  {
    icon: <span class="material-symbols-outlined">link</span>,
    label: "LinkedIn",
    value: personal.linkedinLabel,
    href: personal.linkedin,
  },
  {
    icon: <span class="material-symbols-outlined">picture_as_pdf</span>,
    label: "Currículo PDF",
    value: "Baixar currículo",
    href: personal.curriculo,
  },
];

export default function Contato() {
  return (
    <section className={styles.section} id="contato">
      <div className={styles.bg} aria-hidden="true" />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.textCol}>
            <p className="section-tag anim">Vamos conversar</p>
            <h2 className="section-title anim d1">
              Entre em <em>contato</em>
            </h2>
            <p className={`${styles.desc} anim d2`}>
              Estou sempre aberto a novas oportunidades, projetos desafiadores e
              conexões profissionais significativas.
            </p>
          </div>

          <div className={styles.cardsCol}>
            {items.map((item, i) => (
              <div key={i} className={`${styles.contactCard} anim d${i + 1}`}>
                <span className={styles.cIcon}>{item.icon}</span>
                <div>
                  <span className={styles.cLabel}>{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noreferrer"
                      className={styles.cValue}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className={styles.cValue}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
