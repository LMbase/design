import styles from './Stats.module.css'

const stats = [
  { value: '4', label: 'Token pairs' },
  { value: '$0', label: 'Trading fees' },
  { value: 'P2P', label: 'Direct settlement' },
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
