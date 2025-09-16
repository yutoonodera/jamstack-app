import Link from "next/link";
import { getPosts } from "../../app/lib/getPosts";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">moveeサイト</h1>

      {/* 投稿リスト */}
      <ul className="space-y-6 mb-12">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/tech-blog/${post.id}`}>
                <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </Link>
            </h2>
            <div
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
