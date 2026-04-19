import { useEffect, useRef } from 'react'
import { experiencias } from '../data'
import styles from './Experiencias.module.scss'

function SkillBar({ nome, porcentagem, index }) {
  const barRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (barRef.current) {
              barRef.current.style.width = `${porcentagem}%`
            }
          }, index * 120)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (barRef.current) observer.observe(barRef.current.closest(`.${styles.skillRow}`))
    return () => observer.disconnect()
  }, [porcentagem, index])

  return (
    <div className={styles.skillRow}>
      <div className={styles.skillMeta}>
        <span className={styles.skillNome}>{nome}</span>
        <span className={styles.skillPct}>{porcentagem}%</span>
      </div>
      <div className={styles.skillTrack}>
        <div
          className={styles.skillBar}
          ref={barRef}
          style={{ width: '0%' }}
        />
      </div>
    </div>
  )
}

function ExperienciaCard({ exp, index }) {
  return (
    <div className={`${styles.card} anim d${(index % 3) + 1}`}>
      <div className={styles.cardLeft}>
        <div className={styles.timeline}>
          <div className={styles.timelineDot} />
          <div className={styles.timelineLine} />
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <div>
            <h3 className={styles.empresa}>{exp.empresa}</h3>
            <p className={styles.cargo}>{exp.cargo}</p>
          </div>
          <div className={styles.periodo}>
            <span className={styles.periodoStart}>{exp.inicio}</span>
            <span className={styles.periodoArrow}>→</span>
            <span className={styles.periodoEnd}>{exp.fim}</span>
          </div>
        </div>

        <p className={styles.resumo}>{exp.resumo}</p>

        <div className={styles.skills}>
          <p className={styles.skillsTitle}>Tecnologias utilizadas</p>
          {exp.tecnologias.map((tech, i) => (
            <SkillBar key={tech.nome} nome={tech.nome} porcentagem={tech.porcentagem} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experiencias() {
  return (
    <section className={styles.section} id="experiencias">
      <div className="container">
        <p className="section-tag anim">Trajetória</p>
        <h2 className="section-title anim d1">Experiência <em>profissional</em></h2>
        <p className="section-subtitle anim d2">Empresas e projetos que moldaram minha visão técnica.</p>

        <div className={styles.timeline}>
          {experiencias.map((exp, i) => (
            <ExperienciaCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
