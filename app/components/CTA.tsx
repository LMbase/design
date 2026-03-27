import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section} id="cta">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Ready to build?</h2>
        <p className={styles.subtitle}>
          Join thousands of engineers shipping AI faster.
        </p>
        <div className={styles.actions}>
          <a
            href="https://app.lmbase.io/signup"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Start Building
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
