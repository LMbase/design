import styles from './HowItWorks.module.css'

const steps = [
  {
    num: '01',
    title: 'Choose a model',
    desc: 'Browse thousands of open-source models in the registry. Filter by task, size, provider, or fine-tuning status.',
  },
  {
    num: '02',
    title: 'Fine-tune or deploy',
    desc: 'Deploy in one click or use the fine-tuning studio to customize the model with your own dataset and parameters.',
  },
  {
    num: '03',
    title: 'Ship and scale globally',
    desc: 'Get a production-ready API endpoint. Scale automatically across 20+ regions with built-in caching and redundancy.',
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
