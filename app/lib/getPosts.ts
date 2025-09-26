export type Post = {
    date: string | number | Date;
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    slug: string;
  };

  export async function getPosts(): Promise<Post[]> {
    const res = await fetch("http://localhost:8000//wp-json/wp/v2/posts?_embed");
    if (!res.ok) return [];
    return res.json();
  }