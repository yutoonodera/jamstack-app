export type Post = {
    date: string | number | Date;
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    slug: string;
  };

  export async function getPosts(): Promise<Post[]> {
    const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "http://localhost:8000";
    const res = await fetch(`${baseUrl}/wp-json/wp/v2/posts?_embed`);
    if (!res.ok) return [];
    return res.json();
  }