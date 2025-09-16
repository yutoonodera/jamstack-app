import Link from "next/link";
import { getPosts } from "../app/lib/getPosts";
import PostsChart from "./components/PostsChart";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6">moveeサイト</h1>

      {/* 投稿グラフ */}
      <PostsChart />
    </main>
  );
}
