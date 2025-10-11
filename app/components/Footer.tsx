// components/Footer.tsx
export default function Footer() {
    const footerLinks: { label: string; href: string }[][] = [
      [
        { label: "movee", href: "/" },
        { label: "はじまりをつくる", href: "/make-start" },
        { label: "ソフトウェア開発", href: "/services/software" },
        { label: "技術ブログ", href: "/tech-blog" },
        { label: "onody-log", href: "/onody-log" },
        { label: "お問い合わせ", href: "/contact" },
        { label: "特定商取引法に基づく表記", href: "/legal/asct" },
      ],
    ];

    return (
      <footer className="bg-neutral-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            {footerLinks.map((column, colIdx) => (
              <ul key={colIdx} className="space-y-2">
                {column.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="hover:text-gray-300 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-gray-500">
            © 2025 movee Inc. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
