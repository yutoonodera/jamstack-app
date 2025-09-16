import { GET } from "../../../app/api/posts/route";

// NextResponse をモック
jest.mock("next/server", () => ({
    NextResponse: {
      json: (data: any, init?: any) => ({
        status: init?.status ?? 200,
        json: async () => data,
      }),
    },
  }));

  // Node.js 環境では fetch がないので、グローバルで定義
  (global as any).fetch = jest.fn();
describe("GET /api/posts", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("正常に投稿データを返す", async () => {
    const mockPosts = [
      { id: 1, title: { rendered: "テスト投稿" }, excerpt: { rendered: "抜粋" }, date: "2025-01-01", slug: "test" },
    ];

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockPosts,
    });

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual(mockPosts);
  });

  it("fetch失敗時は500を返す", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: false,
      json: async () => [],
    } as any);

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data).toEqual({ error: "Failed to fetch posts" });
  });

  it("例外発生時は500を返す", async () => {
    (global as any).fetch = jest.fn(); // fetch をモック化

    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error("ネットワークエラー"));

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data).toEqual({ error: "Internal Server Error" });
  });
}); // ← describe を閉じる