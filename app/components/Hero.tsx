import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className="section-label">AI Infrastructure</span>
          <h1 className={styles.headline}>
            The foundation layer<br />for AI inference
          </h1>
          <p className={styles.subtitle}>
            Deploy any model in seconds. Fine-tune to perfection.
            Scale without limits. One unified API for your entire AI stack.
          </p>
          <div className={styles.buttons}>
            <a href="#cta" className={styles.btnPrimary}>
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="https://docs.lmbase.io"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              View Docs
            </a>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.cardStack}>
            <div className={styles.codeCard}>
              <div className={styles.codeHeader}>
                <div className={styles.dot} style={{ background: '#ff5f57' }} />
                <div className={styles.dot} style={{ background: '#febc2e' }} />
                <div className={styles.dot} style={{ background: '#28c840' }} />
                <span className={styles.codeTitle}>models.ts</span>
              </div>
              <pre className={styles.codeBlock}>
                <code>{`import { Registry } from 'lmbase'

const model = await Registry.get({
  provider: 'openai',
  name: 'gpt-4o',
  region: 'global'
})

await model.finetune({
  dataset: 'my-data.jsonl',
  epochs: 3,
  learning_rate: 1e-5
})

// → Deployment ready in ~2 mins`}</code>
              </pre>
            </div>

            <div className={styles.floatCard}>
              <div className={styles.metric}>
                <span className={styles.metricValue}>10,847</span>
                <span className={styles.metricLabel}>Models available</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricValue} style={{ color: 'var(--color-accent)' }}>50ms</span>
                <span className={styles.metricLabel}>Avg. latency</span>
              </div>
            </div>

            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
