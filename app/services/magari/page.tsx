// app/magari/page.tsx
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function MagariPage() {
  return (
    <>
    <Header />
    <main className="mx-auto max-w-5xl px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <h1 className="text-4xl font-bold mb-4">Magari（間借り）サービス</h1>
        <p className="text-lg text-gray-700 mb-6">
          サーバ・ドメイン・開発費ゼロ。<br />
          movee.jp の配下に、あなた専用の紹介ページを間借りできます。
        </p>
        <Link
          href="/contact"
          className="inline-block bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition"
        >
          掲載希望・お問い合わせ
        </Link>
      </section>

      {/* 仕組み・比較 */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Magariとは？</h2>
        <p className="text-gray-700 mb-6">
          通常、個人事業主やフリーランスがサービスサイトやECサイトを立ち上げる場合、サーバ代・ドメイン代・保守費用・開発費用・各種API費用など、多くのコストが発生します。
        </p>
        <p className="text-gray-700">
          Magariでは、弊社のWebサイト（Next.js）配下にあなたの紹介ページを作成し、運用やインフラの負担なく情報発信・集客が可能です。
        </p>
      </section>
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Magariと自前構築の比較</h2>
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-gray-100">
                <th className="py-3 px-4 font-semibold text-gray-700"></th>
                <th className="py-3 px-4 font-semibold text-gray-700">Magari利用</th>
                <th className="py-3 px-4 font-semibold text-gray-700">自前構築（オリジナル開発）</th>
                </tr>
            </thead>
            <tbody className="text-gray-800">
                <tr className="border-t">
                <td className="py-3 px-4 font-medium">初期費用</td>
                <td className="py-3 px-4">0円〜（掲載のみ）</td>
                <td className="py-3 px-4">数十万〜数百万円</td>
                </tr>
                <tr className="border-t">
                <td className="py-3 px-4 font-medium">サーバ・ドメイン</td>
                <td className="py-3 px-4">不要（movee.jp配下で運用）</td>
                <td className="py-3 px-4">契約・設定が必要（月数千円〜）</td>
                </tr>
                <tr className="border-t">
                <td className="py-3 px-4 font-medium">保守・更新</td>
                <td className="py-3 px-4">弊社側で対応</td>
                <td className="py-3 px-4">自社または外部委託（追加コスト）</td>
                </tr>
                <tr className="border-t">
                <td className="py-3 px-4 font-medium">機能拡張</td>
                <td className="py-3 px-4">Next.jsベースで柔軟に対応可能</td>
                <td className="py-3 px-4">要追加開発</td>
                </tr>
                <tr className="border-t">
                <td className="py-3 px-4 font-medium">運用スピード</td>
                <td className="py-3 px-4">即日〜数日で掲載可能</td>
                <td className="py-3 px-4">要要件定義・開発期間（数週間〜）</td>
                </tr>
                <tr className="border-t">
                <td className="py-3 px-4 font-medium">SEO / 表示速度</td>
                <td className="py-3 px-4">Next.jsにより高速＆最適化済み</td>
                <td className="py-3 px-4">開発内容によって品質が変動</td>
                </tr>
            </tbody>
            </table>
        </div>
      </section>
      {/* メリット */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Magariの特徴</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>サーバ・ドメイン費用が不要</li>
          <li>Next.jsベースなので、EC・予約・ブログなど柔軟に機能拡張可能</li>
          <li>SEO最適化済み、レスポンシブ対応</li>
          <li>集客・販促のための設計も支援可能</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <p className="text-gray-700 mb-4">
          あなたのサービスを、movee.jp の配下で発信してみませんか？
        </p>
        <Link
          href="/contact"
          className="inline-block bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition"
        >
          掲載希望・お問い合わせ
        </Link>
      </section>
    </main>
    <Footer />
    </>
  );
}
