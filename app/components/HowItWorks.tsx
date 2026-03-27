import styles from './HowItWorks.module.css'

const steps = [
  {
    num: '01',
    title: 'Post your order',
    desc: 'Choose which tokens to give (e.g. 50K OpenAI) and what you want in return (e.g. Anthropic Sonnet). Set your rate and amount.',
  },
  {
    num: '02',
    title: 'Get matched P2P',
    desc: 'lmbase finds a counterparty with complementary needs. No central order book — just peer discovery via a lightweight relay.',
  },
  {
    num: '03',
    title: 'Swap. Done.',
    desc: 'Both proxies spin up locally. Tokens flow directly. You get an OpenAI-compatible endpoint pointing at your peer\'s API — instant, no setup.',
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className="section-label">How it works</span>
          <h2 className={`section-heading ${styles.heading}`}>
            From zero to production<br />in three steps
          </h2>
        </div>
        <div className={styles.steps}>
          {steps.map((step, i) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
              {i < steps.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                    <path d="M0 6h36M32 2l4 4-4 4" stroke="var(--color-outline-variant)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
