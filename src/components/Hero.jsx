import { useEffect, useRef } from "react";
import { personal } from "../data";
import styles from "./Hero.module.scss";

export default function Hero() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!parallaxRef.current) return;
      const y = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${y * 0.4}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.parallaxLayer} ref={parallaxRef}>
        <div className={styles.bgText} aria-hidden="true">
          DEV
        </div>
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.left}>
          <p
            className={`section-tag ${styles.tag}`}
            style={{ animationDelay: "0.1s" }}
          >
            Currículo Profissional
          </p>
          <h1 className={styles.name}>
            {personal.nome.split(" ").map((word, i) => (
              <span
                key={i}
                className={styles.nameWord}
                style={{ animationDelay: `${0.2 + i * 0.08}s` }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p className={styles.titulo} style={{ animationDelay: "0.5s" }}>
            {personal.titulo}
          </p>
          <p className={styles.subtitulo} style={{ animationDelay: "0.65s" }}>
            {personal.subtitulo}
          </p>
          <div className={styles.actions} style={{ animationDelay: "0.8s" }}>
            <a
              href="#sobre"
              className={styles.btnPrimary}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#sobre")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Conhecer mais
            </a>
            <a
              href="#contato"
              className={styles.btnSecondary}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contato")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Entrar em contato
            </a>
            <a
              href="https://curriculo-renato-freitas.netlify.app/curriculo-renato-freitas.pdf"
              className={styles.btnSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Currículo PDF
            </a>
          </div>
        </div>

        <div className={styles.right} style={{ animationDelay: "0.3s" }}>
          <div className={styles.photoFrame}>
            <div className={styles.photoBorder} />
            <img
              src={personal.foto}
              alt={personal.nome}
              className={styles.photo}
            />
            <div className={styles.photoGlow} />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Disponível para outro desafio
          </div>
        </div>
      </div>

      <div className={styles.scroll} aria-hidden="true">
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
