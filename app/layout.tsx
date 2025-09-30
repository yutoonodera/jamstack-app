// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: '株式会社movee',
  description: '福岡のソフトウェア開発です',
  robots: process.env.NEXT_PUBLIC_ENV === "staging" ? "noindex,nofollow" : "index,follow",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
