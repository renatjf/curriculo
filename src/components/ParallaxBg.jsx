import { useEffect, useRef } from 'react'
import styles from './ParallaxBg.module.scss'

export default function ParallaxBg() {
  const ref = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return
      const y = window.scrollY
      ref.current.querySelectorAll('[data-speed]').forEach(el => {
        el.style.transform = `translateY(${y * parseFloat(el.dataset.speed)}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={styles.bg} ref={ref} aria-hidden="true">
      <div className={styles.blob1} data-speed="0.18" />
      <div className={styles.blob2} data-speed="-0.1" />
      <div className={styles.blob3} data-speed="0.07" />
      <div className={styles.blob4} data-speed="-0.14" />
      <div className={styles.grid} />
    </div>
  )
}
