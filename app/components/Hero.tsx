import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className="section-label">Peer-to-Peer LLM Exchange</span>
          <h1 className={styles.headline}>
            Trade API credits<br />with anyone
          </h1>
          <p className={styles.subtitle}>
            Share your OpenAI credits, get Anthropic access. Share Gemini, get GitHub Copilot.
            A decentralized marketplace for LLM API tokens — no middleman, your keys stay on your machine.
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
                <span className={styles.codeTitle}>lmbase.ts</span>
              </div>
              <pre className={styles.codeBlock}>
                <code>{`import { Exchange } from 'lmbase'

const session = await Exchange.create({
  offer: {
    provider: 'openai',
    model: 'gpt-4o',
    tokens: 100000
  },
  request: {
    provider: 'anthropic',
    model: 'claude-3-5-sonnet'
  }
})

// → Matched! Local proxy running
// → Use your peer's API instantly`}</code>
              </pre>
            </div>

            <div className={styles.floatCard}>
              <div className={styles.metric}>
                <span className={styles.metricValue}>4</span>
                <span className={styles.metricLabel}>Providers</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricValue} style={{ color: 'var(--color-accent)' }}>P2P</span>
                <span className={styles.metricLabel}>Direct exchange</span>
              </div>
            </div>

            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              Keys stay on your machine
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
