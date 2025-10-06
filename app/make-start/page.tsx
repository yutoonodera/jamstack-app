import AisasChart from "../components/AisasChart";
import ChurnChart from "../components/ChurnChart";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AttentionPage() {
  return (
    <>
      <Header />
      <section className="my-12">
        <article className="prose prose-lg mx-auto max-w-3xl px-4">
          {/* ページタイトル */}
          <h1>はじまりをつくる</h1>
          <p className="mt-2 text-lg text-gray-700 font-medium">
            株式会社moveeは、企業の成長の“はじまり”となる認知の拡大を大切にし、
            営業や広告に頼らない構造的な接点づくりに取り組んでいます。
          </p>
          <p className="inline-block mt-6 border-b-4 border-gray-800 pb-1 font-semibold text-lg">
            営業や広告に頼らない、構造的な認知の拡大へ
          </p>

          {/* チャーン率の説明 */}
          <p>
            企業が成長を続けるうえで見過ごせないのが、
            <strong>チャーン率（Churn Rate）＝既存顧客の離脱率</strong>です。
            どんなに優れたサービスであっても、時間の経過とともに一定割合のユーザーは自然に離脱していきます。
            これは BtoB SaaS、BtoC サブスク、EC、無料Webサービスなど、
            業種を問わず共通して見られる現象です。
          </p>

          <p>
            例えば、BtoB SaaS の優良企業でも年間5％前後、
            一般的なSaaSでは10％前後、BtoCや無料サービスではさらに高い離脱率が報告されています。
            つまり、<strong>何もしなければユーザー数は毎年減っていく</strong>という前提に立つ必要があります。
          </p>

          <p>
            逆にいえば、このチャーン率を理解していないと、
            「なぜユーザーが増えないのか」「なぜ成長が鈍化しているのか」という問題に対して、
            適切な手を打つことができません。
            まずは現実として、ユーザー数が時間とともに減少していく構造を正しく認識することが重要です。
          </p>

          <div className="my-20">
            <ChurnChart />
          </div>

          <p>
            このように、チャーン率の影響は業種を問わず顕著です。
            だからこそ企業は、単発的な施策ではなく、
            <strong>継続的に新しい接点を生み出す仕組み</strong>を持つ必要があります。
          </p>

          {/* Attention への導入 */}
          <div className="mt-20" />
          <p>
            多くの企業が新規接点の創出手段としてまず挙げるのは、
            「営業活動の強化」や「広告出稿の拡大」です。
            もちろんこれらも有効な手段ですが、私たちはそこに
            <strong>もう一段階、構造的な考え方</strong>が必要だと考えています。
          </p>

          <h2>認知（Attention）への投資という考え方</h2>

          <p>
            私たちは、AISASモデルにおける最初の段階である
            「Attention（注意・認知）」に意識的に投資することで、
            自然な形で企業の露出を増やし、新しい接点を生み出すことを重視しています。
          </p>

          <div className="my-8">
            <AisasChart />
          </div>

          <p>
            「Attention」を起点にする取り組みは、単発的な営業や広告ではなく、
            <strong>ソフトウェアや仕組みを通じて継続的に認知を広げる</strong>
            ことを目的としています。これにより、企業は長期的かつ安定的な接点創出の基盤を築くことができます。
          </p>

          <h3>1. ソフトウェア強化と「間借り型」ページによる自然な露出</h3>

          <p>
            まず、受託開発によるソフトウェア改善を通じて、
            企業の魅力や強みを適切に可視化し、検索・SNS・口コミなどから自然に見つけてもらえる状態を整えます。
          </p>

          <p>
            さらに、弊社が運営する Next.js 製の自社サイト内に、企業の LP（ランディングページ）や EC ページを
            <strong>「間借り」形式で組み込む</strong>ことも可能です。
            これにより、単なる紹介にとどまらず、実際の販促・集客ページを弊社の仕組み上に展開できます。
            広告に依存しない柔軟な露出手段です。
          </p>

          <h3>2. 意図的な接点創出（メール送信代行）</h3>

          <p>
            一方で、自然な露出だけでは接点を持てない企業も存在します。
            そのような企業には、メール送信代行によって意図的にアプローチし、認知のきっかけを作ります。
          </p>

          <p>
            これは「営業をかける」というよりも、適切な情報を届けることで企業に存在を知ってもらい、
            認知を意図的に生み出す施策です。
          </p>

          <h2>「はじまり」への投資が、長期的な成長を支える</h2>

          <p>
            チャーン率が存在する限り、新しい接点の創出は避けて通れません。
            しかし、営業力や広告費に依存するのではなく、
            <strong>認知という「はじまり」に投資することで構造的に露出を拡大する</strong>——
            これが私たちの考え方です。
          </p>

          <p>
            ソフトウェアと仕組み、そして適切な接点創出を通じて、
            企業の持続的な成長を後押しします。
          </p>
          <div className="mt-12 text-center text-gray-700">
            <p className="font-medium">株式会社movee</p>
            <p className="text-sm text-gray-500 mt-1">
              企業の“はじまり”をともにつくるパートナーでありたいと考えています。
            </p>
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
}
