import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className="section-label">LLM Token Exchange</span>
          <h1 className={styles.headline}>
            The foundational token<br />interchange layer
          </h1>
          <p className={styles.subtitle}>
            Inference tokens are real money. lmbase is a P2P exchange — 
            swap your idle OpenAI credits for Anthropic, Gemini for Copilot.
            No escrow. No middleman. Your keys, your tokens, your trade.
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
                <span className={styles.codeTitle}>exchange.ts</span>
              </div>
              <pre className={styles.codeBlock}>
                <code>{`import { Exchange } from 'lmbase'

// Your idle GPT-4o credits → swap
const order = await Exchange.order({
  give: { provider: 'openai', tokens: 50_000 },
  get:  { provider: 'anthropic', model: 'sonnet' }
})

// → Matched in < 2 min
// → Local proxy: localhost:8080
// → trade.execute()`}</code>
              </pre>
            </div>

            <div className={styles.floatCard}>
              <div className={styles.metric}>
                <span className={styles.metricValue}>4</span>
                <span className={styles.metricLabel}>Providers</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricValue} style={{ color: 'var(--color-accent)' }}>$0</span>
                <span className={styles.metricLabel}>No fees</span>
              </div>
            </div>

            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              No escrow. P2P settlement.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
