import styles from './HowItWorks.module.css'

const steps = [
  {
    num: '01',
    title: 'Set what you offer',
    desc: 'Choose your provider (OpenAI, Anthropic, Gemini, Copilot), pick the model, and set your token budget. Your API key stays on your machine.',
  },
  {
    num: '02',
    title: 'Request what you need',
    desc: 'Select the model you want to use. LMbase shows you the estimated token return based on current provider pricing.',
  },
  {
    num: '03',
    title: 'Get matched, start using',
    desc: 'LMbase pairs you with a compatible peer, spins up a local proxy, and gives you a copy-ready endpoint. Your session is live.',
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
