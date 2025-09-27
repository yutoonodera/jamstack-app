export type Post = {
    date: string | number | Date;
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    slug: string;
  };

  export async function getPosts(): Promise<Post[]> {
    const baseUrl = "http://133.167.103.10:8000";
    const res = await fetch(`${baseUrl}/wp-json/wp/v2/posts?_embed`);
    if (!res.ok) return [];
    return res.json();
  }