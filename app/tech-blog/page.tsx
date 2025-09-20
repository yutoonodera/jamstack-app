"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Post, getPosts } from "../../app/lib/getPosts";

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");

  // ページマウント時に記事取得
  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

// 複数ワードでタイトルのみフィルタ
const filteredPosts = posts.filter((post) => {
  if (!search.trim()) return true;

  // 空白で分割して複数ワード対応
  const keywords = search
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  const title = post.title.rendered.toLowerCase();

  // タイトルにすべてのキーワードが含まれるかチェック
  return keywords.every((kw) => title.includes(kw));
});

  return (
    <main className="p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">テックブログ</h1>

      {/* 検索窓 */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="タイトルで検索"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={(e) => setSearch(e.target.value.trim())}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* 投稿リスト */}
      <ul className="space-y-6 mb-12">
        {filteredPosts.map((post) => (
          <li key={post.id} className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">
              <Link href={`/tech-blog/${post.slug}`}>
                <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              </Link>
            </h2>
            <div
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          </li>
        ))}
        {filteredPosts.length === 0 && <p>該当する記事がありません</p>}
      </ul>
    </main>
  );
}
