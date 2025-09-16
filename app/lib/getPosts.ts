// app/lib/getPosts.ts
export type Post = {
    date: string | number | Date;
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    slug: string;
  };

  export async function getPosts(): Promise<Post[]> {
    const res = await fetch("http://localhost:3000/api/posts", { cache: "no-store" });
    if (!res.ok) return [];
    return res.json();
  }
