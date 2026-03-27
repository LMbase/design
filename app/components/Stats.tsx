import styles from './Stats.module.css'

const stats = [
  { value: '10,000+', label: 'Models available' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '50ms', label: 'Avg. latency' },
  { value: 'Global', label: 'CDN coverage' },
]

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {stats.map((stat, i) => (
          <div key={stat.label} className={styles.stat}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
            {i < stats.length - 1 && <div className={styles.divider} />}
          </div>
        ))}
      </div>
    </section>
  )
}
