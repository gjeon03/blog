import { getBlogPosts } from "app/blog/utils";

export const baseUrl = "https://gimbap.dev";

export default async function sitemap() {
  const posts = getBlogPosts();

  const blogs = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const tagSet = new Set<string>();
  posts.forEach((post) => {
    post.metadata.tags?.forEach((tag) => tagSet.add(tag));
  });

  const tagPages = [...tagSet].map((tag) => ({
    url: `${baseUrl}/tags/${encodeURIComponent(tag)}`,
    lastModified: new Date().toISOString().split("T")[0], // or latest related post date
  }));

  const staticRoutes = ["", "/blog", "/tags"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...staticRoutes, ...blogs, ...tagPages];
}
