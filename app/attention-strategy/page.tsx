import AisasChart from "../components/AisasChart";
import ChurnChart from "../components/ChurnChart";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AttentionStrategyPage() {
  return (
    <>
    <Header />
    <section className="my-12">
      <article className="prose prose-lg mx-auto max-w-3xl px-4">
        <h1>Attention戦略</h1>
        <p>
          営業や広告に頼らない、構造的な成長を実現するために
        </p>

        <p>
          どの企業にもチャーン率（解約率）は存在し、時間の経過とともにユーザー数は自然に減少していきます。
          この現実を直視したとき、企業が持続的に成長していくためには、
          <strong>新規顧客の獲得が不可欠</strong>であることが明らかです。
        </p>
        <div className="my-8">
        <ChurnChart />
        </div>
        <div className="mt-20" />
        <p>
          しかし、多くの企業が新規獲得の手段として真っ先に挙げるのは「営業活動の強化」や「広告出稿の拡大」です。
          私たちは、そこにもう一歩踏み込んだ<strong>本質的なアプローチ</strong>があると考えています。
        </p>

        <h2>「Attention」に投資するという考え方</h2>

        <p>
          私たちは、AISASモデルにおける最初の段階である
          「Attention（注意・認知）」 に戦略的に投資することで、
          自然な形で企業の露出を増やし、新たな接点を生み出す方針を取っています。
        </p>
        <div className="my-8">
        <AisasChart />
        </div>
        <p>
          「Attention」を起点とした戦略は、単発的な営業や広告ではなく、
          <strong>ソフトウェアや仕組みを通じて継続的に認知を広げる</strong>
          ことを目的としています。これにより、企業は長期的かつ安定的な顧客基盤の拡大を実現できます。
        </p>

        <h3>1. ソフトウェア改善と「間借り型」ページによる自然な露出の拡大</h3>

        <p>
          まず、受託開発によるソフトウェア改善を通じて、企業の魅力や強みを適切に可視化し、
          検索・SNS・口コミなどから自然に見つけてもらえる状態を整えます。
        </p>

        <p>
          さらに、弊社が運営する Next.js 製の自社サイト内に、企業の LP（ランディングページ）や EC ページを
          <strong>「間借り」形式で組み込む</strong>ことも可能です。
          これにより、単なる紹介にとどまらず、実際の販促・集客ページを弊社の仕組み上に展開できます。
          広告に依存しない柔軟な露出手段です。
        </p>

        <h3>2. 意図的な接点創出（メール送信代行）</h3>

        <p>
          一方で、自然な露出だけでは接点を持てない企業もあります。
          そのような企業に対しては、メール送信代行によって意図的にアプローチし、認知のきっかけを作ります。
        </p>

        <p>
          これはいわゆる「営業」ではなく、適切な情報を届けることで企業に存在を知ってもらい、
          認知を意図的に生み出す施策です。
        </p>

        <h2>「Attention」を起点とした長期的な成長戦略</h2>

        <p>
          チャーン率が存在する限り、新規顧客の獲得は避けて通れません。
          しかし、営業力や広告費に依存するのではなく、
          <strong>Attention に投資することで構造的に認知を拡大する</strong>——
          これが私たちの戦略です。
        </p>

        <p>
          ソフトウェアと仕組み、そして適切な接点創出を通じて、
          企業の持続的な成長を後押しします。
        </p>
      </article>
    </section>
    <Footer />
    </>
  );
}
