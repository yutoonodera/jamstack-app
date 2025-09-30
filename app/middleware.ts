// app/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // 環境がstagingでなければスルー
  if (process.env.NEXT_PUBLIC_ENV !== "staging") {
    return NextResponse.next();
  }

  const auth = request.headers.get("authorization");

  const user = process.env.STAGING_AUTH_USER || "staging";
  const pass = process.env.STAGING_AUTH_PASSWORD || "staging";
  const expected = "Basic " + Buffer.from(`${user}:${pass}`).toString("base64");

  if (auth !== expected) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Staging"' },
    });
  }

  return NextResponse.next();
}
