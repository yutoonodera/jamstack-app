export type Post = {
  date: string | number | Date;
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
};

export async function getTechPosts(): Promise<Post[]> {
  const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "http://localhost:8000";
  const techCatId = process.env.NEXT_PUBLIC_TECH_CAT_ID || "3";
  const res = await fetch(
    `${baseUrl}/wp-json/wp/v2/posts?_embed&categories=${techCatId}`
  );
  if (!res.ok) return [];
  return res.json();
}
