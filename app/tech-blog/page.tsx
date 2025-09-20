"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Post, getTechPosts } from "../../app/lib/getTechPosts";

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getTechPosts().then(setPosts);
  }, []);

  const filteredPosts = posts.filter((post) => {
    if (!search.trim()) return true;

    const keywords = search
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);

    const title = post.title.rendered.toLowerCase();

    return keywords.every((kw) => title.includes(kw));
  });

  return (
    <main className="p-6 font-sans max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">テックブログ</h1>
      {/* サブタイトル / 説明文 */}
      <p className="text-sm text-gray-500 mb-6">
        株式会社moveeのエンジニアが書いています
      </p>
      {/* 検索窓 */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="タイトルで検索"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={(e) => setSearch(e.target.value.trim())}
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 投稿リスト（カード表示・全体リンク化） */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            href={`/tech-blog/${post.slug}`}
            className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 p-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <h2 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-blue-600 group-focus:text-blue-600">
              <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </h2>
            <div
              className="text-gray-600 text-sm line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          </Link>
        ))}
        {filteredPosts.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            該当する記事がありません
          </p>
        )}
      </div>
    </main>
  );
}
