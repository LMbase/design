import styles from './download.module.css'

const GITHUB_RELEASES = 'https://github.com/LMbase/desktop/releases/latest'

const platforms = [
  {
    id: 'mac',
    name: 'macOS',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
    ),
    archs: ['Apple Silicon (M1/M2/M3)', 'Intel'],
    badge: 'macOS 11+',
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.227 1.177 1.044 2.065 2.169 2.655.995.515 2.04.777 3.16.774a4.563 4.563 0 013.412-1.54c1.188-.188 2.305-.685 3.18-1.502.908-.848 1.456-1.834 1.732-3.41.29-1.655.034-3.314-.973-4.902-.977-1.564-2.13-2.532-3.619-3.332-.514-.28-1.088-.466-1.758-.597l-.048-.001c-.315 0-.63.012-.953.05zm-2.06 3.19c.43 0 .847.1 1.225.29.378.19.687.47.906.82.215.345.33.735.33 1.147 0 .412-.115.802-.33 1.147-.219.35-.528.63-.906.82-.378.19-.795.29-1.225.29-.43 0-.847-.1-1.225-.29a2.14 2.14 0 01-.906-.82 2.166 2.166 0 01-.33-1.147c0-.412.115-.802.33-1.147.219-.35.528-.63.906-.82a2.731 2.731 0 011.225-.29zm6.415 4.02c-1.295 0-2.48.27-3.477.823-1.016.565-1.805 1.38-2.303 2.45-.492 1.07-.695 2.343-.595 3.82.101 1.477.5 2.783 1.148 3.89.645 1.11 1.52 1.986 2.575 2.633 1.05.645 2.23.967 3.477.967 1.295 0 2.48-.27 3.477-.823 1.016-.565 1.805-1.38 2.303-2.45.492-1.07.695-2.343.595-3.82-.101-1.477-.5-2.783-1.148-3.89-.645-1.11-1.52-1.986-2.575-2.633-1.05-.645-2.23-.967-3.477-.967zm-.36 1.41c.815 0 1.565.18 2.21.537.646.357 1.146.856 1.483 1.497.336.64.508 1.383.508 2.212 0 .828-.172 1.57-.508 2.21-.337.64-.837 1.14-1.483 1.496-.645.357-1.395.537-2.21.537-.815 0-1.565-.18-2.21-.537-.646-.357-1.146-.856-1.483-1.496-.336-.64-.508-1.382-.508-2.21 0-.83.172-1.572.508-2.212.337-.64.837-1.14 1.483-1.497.645-.357 1.395-.537 2.21-.537zm.04 1.296c-.48 0-.92.11-1.32.328-.395.22-.71.525-.937.917-.227.39-.343.833-.343 1.323 0 .49.116.932.343 1.323.227.39.542.697.937.916.4.22.84.33 1.32.33.48 0 .92-.11 1.32-.33.395-.22.71-.526.937-.917.227-.39.343-.833.343-1.323 0-.49-.116-.932-.343-1.323-.227-.39-.542-.697-.937-.916a2.19 2.19 0 00-1.32-.328z"/>
      </svg>
    ),
    archs: ['Debian / Ubuntu (AMD64)', 'Fedora / RHEL (AMD64)', 'AppImage (Universal)'],
    badge: 'Ubuntu 20.04+, Fedora 35+',
  },
  {
    id: 'windows',
    name: 'Windows',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-10.949L24 0v11.551H10.949M0 12.551h9.75v9.451L0 20.701M10.949 12.6H24V24l-12.053-1.05"/>
      </svg>
    ),
    archs: ['Windows (x64)', 'Windows (ARM64)'],
    badge: 'Windows 10+',
  },
]

function getPlatform(): string {
  if (typeof window === 'undefined') return 'unknown'
  const ua = window.navigator.userAgent.toLowerCase()
  if (ua.includes('mac')) return 'mac'
  if (ua.includes('win')) return 'windows'
  if (ua.includes('linux')) return 'linux'
  return 'unknown'
}

export default function DownloadPage() {
  const platform = 'unknown' // rendered client-side

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.heading}>Download LMbase</h1>
        <p className={styles.subheading}>
          Get the desktop client for your platform. All releases are open source.
        </p>
        <a href={GITHUB_RELEASES} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
          View all releases on GitHub
        </a>
      </div>

      <div className={styles.platformGrid}>
        {platforms.map((platform) => (
          <div key={platform.id} className={styles.platformCard}>
            <div className={styles.platformHeader}>
              <div className={styles.platformIcon}>{platform.icon}</div>
              <div>
                <h2 className={styles.platformName}>{platform.name}</h2>
                <span className={styles.platformBadge}>{platform.badge}</span>
              </div>
            </div>
            <ul className={styles.archList}>
              {platform.archs.map((arch) => (
                <li key={arch} className={styles.archItem}>
                  <span className={styles.archDot} />
                  {arch}
                </li>
              ))}
            </ul>
            <a
              href={`${GITHUB_RELEASES}?platform=${platform.id}`}
              className={styles.downloadBtn}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v8M5 7l3 3 3-3M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Download for {platform.name}
            </a>
          </div>
        ))}
      </div>

      <div className={styles.note}>
        <p>
          LMbase is open source under the MIT license.{' '}
          <a href="https://github.com/LMbase/desktop" target="_blank" rel="noopener noreferrer">
            View source on GitHub
          </a>
        </p>
      </div>
    </div>
  )
}
