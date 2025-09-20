export const revalidate = 60;  // 60秒ごとに再検証
// app/tech-blog/post/[id]/page.tsx
import { getPost } from "../../lib/getPost";

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.slug);
  console.log("取得した記事:", post); // ★ここで確認
  if (!post) return <div>記事が見つかりません</div>;

  return (
    <main className="p-6 font-sans">
      <h1
        className="text-3xl font-bold mb-6"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </main>
  );
}
