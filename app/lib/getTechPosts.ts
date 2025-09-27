export type Post = {
  date: string | number | Date;
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
};

export async function getTechPosts(): Promise<Post[]> {
  const baseUrl = process.env.WORDPRESS_API_URL || "http://localhost:8000";
  const res = await fetch(
    `${baseUrl}/wp-json/wp/v2/posts?_embed&categories=3`
  );
  if (!res.ok) return [];
  return res.json();
}
