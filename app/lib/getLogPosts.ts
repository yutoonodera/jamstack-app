// app/lib/getDiaryPosts.ts
export type LogPost = {
    id: number;
    date: string;
    title: { rendered: string };
    content: { rendered: string };
  };

  export async function getLogPosts(): Promise<LogPost[]> {
    const res = await fetch(
        // "http://localhost:8000/wp-json/wp/v2/posts?_embed&categories=10"
        "http://localhost:8000/wp-json/wp/v2/posts?_embed&categories=10"

    );
    if (!res.ok) throw new Error("Failed to fetch diary posts");
    return res.json();
  }
