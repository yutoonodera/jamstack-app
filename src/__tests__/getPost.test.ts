import { getPost, PostDetail } from "../../app/lib/getPost";

global.fetch = jest.fn();

const mockPost: PostDetail = {
  id: 1,
  slug: "Hello World",
  title: { rendered: "Hello World" },
  content: { rendered: "This is the full content" },
};

describe("getPost", () => {
    beforeEach(() => {
      (fetch as jest.Mock).mockClear();
    });

    it("fetches a post by slug correctly", async () => {
      const mockPost = { id: 1, slug: "test-slug", title: { rendered: "タイトル" }, content: { rendered: "本文" } };

      (fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: async () => [mockPost], // slug検索は配列で返る
      });

      const post = await getPost("test-slug");
      expect(post).toEqual(mockPost);
      expect(fetch).toHaveBeenCalledWith(
        "http://localhost:8000/wp-json/wp/v2/posts?slug=test-slug&_embed"
      );
    });
  });


  it("returns null if fetch fails", async () => {
    (fetch as jest.Mock).mockResolvedValue({ ok: false });

    const post = await getPost("1");
    expect(post).toBeNull();
  });

  it("calls fetch with correct id", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockPost,
    });

    await getPost("42");
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:8000/wp-json/wp/v2/posts?slug=42&_embed"
    );
  });
