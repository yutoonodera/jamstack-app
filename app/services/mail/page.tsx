import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { CheckCircleIcon, EnvelopeOpenIcon, LightBulbIcon,CpuChipIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "意図的な接点創出（メール送信代行） | 株式会社movee",
  description:
    "AIを活用して企業ごとにカスタマイズしたメールを作成し、自然な露出だけでは接点を持てない企業に対して意図的に認知のきっかけをつくるマーケティング施策を提供しています。",
};

export default function MailMarketingPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-20">
        {/* Hero */}
        <section className="mb-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            意図的な接点創出（メール送信代行）
          </h1>
          <div className="mt-6 mx-auto max-w-3xl">
            <p className="text-lg text-gray-600 leading-relaxed">
              自然な露出だけでは接点を持てない企業に対して、
              <strong> AIを活用したメール送信代行 </strong>で意図的にアプローチし、
              認知のきっかけを作ります。
            </p>
          </div>
        </section>

        {/* Section 1 */}
        <section className="mb-20 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="flex justify-center">
            <LightBulbIcon className="h-24 w-24 text-blue-500" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">自然な露出だけでは届かない企業へ</h2>
            <p className="text-gray-700 leading-relaxed">
              SEOやSNSなどの自然流入だけでは、なかなか接点を持てない企業も存在します。
              特にBtoBのニッチ領域や潜在層には、自発的な検索を待つだけでは十分な接点を得られません。
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-20 grid gap-8 md:grid-cols-2 md:items-center bg-gray-50 rounded-2xl p-10 shadow-sm">
          <div className="flex justify-center order-last md:order-first">
            <EnvelopeOpenIcon className="h-24 w-24 text-blue-500" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">メール送信代行で認知のきっかけをつくる</h2>
            <p className="text-gray-700 leading-relaxed">
              私たちは、ターゲット企業の選定から文面作成、送信・管理までを一括で代行します。
              「営業をかける」というよりも、適切な情報を届けることで企業に存在を知ってもらい、
              意図的に認知を生み出す施策です。
            </p>
          </div>
        </section>

        {/* Section 3 - 差別化ポイント */}
        <section className="mb-20 grid gap-8 md:grid-cols-2 md:items-center">
            <div className="flex justify-center">
                <CpuChipIcon className="h-24 w-24 text-blue-500" />
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4">AIを活用した、高精度なメール作成と対応</h2>
                <p className="text-gray-700 leading-relaxed">
                当社では ChatGPT などの生成AIを活用し、企業ごとに内容を最適化したメールを作成しています。
                事業内容・Webサイト・業界動向などをもとに、
                <strong> 一社ごとに文面をパーソナライズ </strong>。
                一斉送信ではなく、「その企業のための1通」を届けます。
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                また、ネガティブな反応があった場合も、
                <strong> 一歩踏み込んだ提案や代替策 </strong>を提示するフォロー対応により、
                機会損失を最小化します。
                </p>
            </div>
        </section>
        {/* Section 4 - おすすめリスト */}
        <section className="mb-20 bg-blue-50 rounded-2xl p-10 shadow-sm">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold mb-6">こんな方におすすめです</h2>
            <ul className="space-y-3 text-gray-700 text-left inline-block text-base">
              {[
                "新規顧客との接点を増やしたい",
                "潜在層にもサービスを知ってもらいたい",
                "営業リソースが不足している",
                "マーケティング施策を広げたい",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircleIcon className="h-6 w-6 text-blue-500 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="rounded-2xl border bg-gradient-to-r from-blue-600 to-blue-500 p-10 text-white shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">まずはご相談ください</h2>
            <p className="text-base md:text-lg font-light">
              自社のターゲット企業に、<strong>適切な情報を届ける一歩</strong>を一緒に考えましょう。
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="rounded-xl bg-white text-blue-600 px-6 py-3 text-sm font-medium transition hover:bg-gray-100"
              >
                お問い合わせ
              </a>
              <a
                href="mailto:info@movee.jp"
                className="rounded-xl border border-white px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                info@movee.jp にメール
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
