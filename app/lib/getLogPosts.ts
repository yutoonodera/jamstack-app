// app/lib/getDiaryPosts.ts
export type LogPost = {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
};

export async function getLogPosts(): Promise<LogPost[]> {
  // 環境変数の確認用ログ
  console.log("ONODY_CAT_ID:", process.env.ONODY_CAT_ID);
  console.log("WORDPRESS_API_URL:", process.env.NEXT_PUBLIC_WORDPRESS_API_URL);

  // サーバー側で使うので NEXT_PUBLIC_ は不要
  const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "http://localhost:8000";
  const onodyCatId = process.env.ONODY_CAT_ID || "10";

  const res = await fetch(`${baseUrl}/wp-json/wp/v2/posts?_embed&categories=${onodyCatId}`);

  if (!res.ok) {
    console.error("Failed to fetch diary posts:", res.status, res.statusText);
    throw new Error("Failed to fetch diary posts");
  }

  return res.json();
}
