// app/lib/getDiaryPosts.ts
export type LogPost = {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
};

export async function getLogPosts(): Promise<LogPost[]> {
  // サーバー側で使うので NEXT_PUBLIC_ は不要
  const baseUrl = process.env.WORDPRESS_API_URL || "http://localhost:8000";
  const onodyCatId = process.env.ONODY_CAT_ID || "10";

  const res = await fetch(`${baseUrl}/wp-json/wp/v2/posts?_embed&categories=${onodyCatId}`);

  if (!res.ok) {
    console.error("Failed to fetch diary posts:", res.status, res.statusText);
    throw new Error("Failed to fetch diary posts");
  }

  return res.json();
}
