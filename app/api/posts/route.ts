// app/api/posts/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const TECH_CATEGORIES_ID = 3; // ← WordPress 側で「tech」タグの ID を確認して設定

    const res = await fetch(
      `http://host.docker.internal:8000/wp-json/wp/v2/posts?categories=${TECH_CATEGORIES_ID}&_embed`,{
      next: { revalidate: 60 }
  });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch posts" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
