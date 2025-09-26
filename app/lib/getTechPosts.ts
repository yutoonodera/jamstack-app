export type Post = {
  date: string | number | Date;
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
};

export async function getTechPosts(): Promise<Post[]> {
  const res = await fetch(
    "http://133.167.103.10:8000/wp-json/wp/v2/posts?_embed&categories=3"
  );
  if (!res.ok) return [];
  return res.json();
}
