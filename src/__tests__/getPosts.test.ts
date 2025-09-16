import { getPosts } from "../../app/lib/getPosts";

global.fetch = jest.fn();

const mockPosts = [
  {
    id: 1,
    title: { rendered: "Hello World" },
    excerpt: { rendered: "This is an excerpt" },
    slug: "hello-world",
  },
];

describe("getPosts", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockPosts,
    });
  });

  it("fetches posts correctly", async () => {
    const posts = await getPosts();
    expect(posts).toEqual(mockPosts);
  });

  it("returns empty array on fetch failure", async () => {
    (fetch as jest.Mock).mockResolvedValue({ ok: false });
    const posts = await getPosts();
    expect(posts).toEqual([]);
  });
});
