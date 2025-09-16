// app/api/posts/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("http://host.docker.internal:8000/wp-json/wp/v2/posts?_embed", {
      cache: "no-store", // キャッシュしない
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
