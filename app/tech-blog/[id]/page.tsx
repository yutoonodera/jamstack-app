// app/tech-blog/post/[id]/page.tsx
import { getPost, PostDetail } from "../../lib/getPost";
type Props = { params: { id: string } };

export default async function PostPage({ params }: Props) {
  const post: PostDetail | null = await getPost(params.id);

  if (!post) {
    return <div>Failed to fetch post</div>;
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <article dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </main>
  );
}
