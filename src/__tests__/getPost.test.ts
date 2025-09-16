import { getPost, PostDetail } from "../../app/lib/getPost";

global.fetch = jest.fn();

const mockPost: PostDetail = {
  id: 1,
  title: { rendered: "Hello World" },
  content: { rendered: "This is the full content" },
};

describe("getPost", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it("fetches a post by id correctly", async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockPost,
    });

    const post = await getPost("1");
    expect(post).toEqual(mockPost);
    expect(fetch).toHaveBeenCalledWith(
      "http://host.docker.internal:8000/wp-json/wp/v2/posts/1?_embed"
    );
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
      "http://host.docker.internal:8000/wp-json/wp/v2/posts/42?_embed"
    );
  });
});
