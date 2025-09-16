// app/lib/getPost.ts
export type PostDetail = {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
  };

  export async function getPost(id: string): Promise<PostDetail | null> {
    const res = await fetch(
      `http://host.docker.internal:8000/wp-json/wp/v2/posts/${id}?_embed`
    );
    if (!res.ok) return null;
    return res.json();
  }
