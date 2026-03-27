import styles from './Stats.module.css'

const stats = [
  { value: '4', label: 'Providers supported' },
  { value: '100%', label: 'Key privacy' },
  { value: 'P2P', label: 'Direct exchange' },
  { value: 'Open', label: 'Source available' },
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
