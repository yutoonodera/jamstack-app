"use client";

import { useState, useEffect } from "react";
import { Post, getTechPosts } from "../../app/lib/getTechPosts";
import SearchBox from "../components/SearchBox";
import PostCard from "../components/PostCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTechPosts().then(setPosts)
    .finally(() => setLoading(false));
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
    <>
    <Header />
    <main className="p-6 font-sans max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">テックブログ</h1>
      <p className="text-sm text-gray-500 mb-6">
        株式会社moveeのエンジニアが書いています
      </p>

      {/* 検索窓 */}
      <SearchBox value={search} onChange={setSearch} />

      {/* 投稿リスト */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {loading && (
          <p className="col-span-full text-center text-gray-500">
            ロード中...
          </p>
      )}
      {!loading &&
        filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}

      {!loading && filteredPosts.length === 0 && (
        <p className="col-span-full text-center text-gray-500">
          該当する記事がありません
        </p>
      )}
      </div>
    </main>
    <Footer />
    </>
  );
}
