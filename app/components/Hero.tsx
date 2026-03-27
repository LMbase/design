import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className="section-label">LLM Token Exchange</span>
          <h1 className={styles.headline}>
            The world's first peer-to-peer<br />LLM token exchange
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

        <div className={styles.visual}>
          <img
            src="/lmbase-hero.png"
            alt="LMbase Desktop App — exchange UI"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  )
}
