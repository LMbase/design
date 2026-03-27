import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section} id="cta">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Your tokens are idle. Someone wants them.</h2>
        <p className={styles.subtitle}>
          Match. Swap. Done. No fees, no escrow, no middleman.
        </p>
        <div className={styles.actions}>
          <a
            href="/download"
            className={styles.btn}
          >
            Download Client
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2v8M5 7l3 3 3-3M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
