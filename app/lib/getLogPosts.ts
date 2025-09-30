// app/lib/getDiaryPosts.ts
export type LogPost = {
    id: number;
    date: string;
    title: { rendered: string };
    content: { rendered: string };
  };

  export async function getLogPosts(): Promise<LogPost[]> {
    const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "http://localhost:8000";
    const onodyCatId = process.env.NEXT_PUBLIC_ONODY_CAT_ID || "10";
    const res = await fetch(
        `${baseUrl}/wp-json/wp/v2/posts?_embed&categories=${onodyCatId}`
    );
    if (!res.ok) throw new Error("Failed to fetch diary posts");
    return res.json();
  }
