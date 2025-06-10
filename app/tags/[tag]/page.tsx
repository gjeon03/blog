import { getBlogPosts } from "app/blog/utils";
import { BlogPosts } from "app/components/posts";
import Link from "next/link";

type Props = {
  params: { tag: string };
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  const tags = new Set<string>();

  posts.forEach((post) => {
    post.metadata.tags?.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).map((tag) => ({ tag }));
}

export default async function TagPage({ params }: Props) {
  const { tag } = params;
  const posts = await getBlogPosts();
  const filtered = posts.filter((p) => p.metadata.tags?.includes(tag));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts tagged with #{tag}</h1>
      {filtered.length === 0 ? <p>No posts found.</p> : <BlogPosts tag={tag} />}
    </div>
  );
}
