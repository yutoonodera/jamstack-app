import { NextRequest, NextResponse } from "next/server";

const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN!;

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get("username");
  if (!username) return NextResponse.json({ data: [] });

  // ユーザーID取得
  const userRes = await fetch(`https://api.twitter.com/2/users/by/username/${username}`, {
    headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
  });
  const userData = await userRes.json();
  const userId = userData.data?.id;
  if (!userId) return NextResponse.json({ data: [] });

  // ツイート取得（本文のみ）
  const tweetsRes = await fetch(
    `https://api.twitter.com/2/users/${userId}/tweets?max_results=5`,
    { headers: { Authorization: `Bearer ${BEARER_TOKEN}` } }
  );
  const tweetsData = await tweetsRes.json();

  return NextResponse.json(tweetsData);
}
