import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'lmbase — The foundation layer for AI inference',
  description: 'Deploy any model in seconds. Fine-tune to perfection. Scale without limits. The AI model registry and fine-tuning platform built for engineers.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
