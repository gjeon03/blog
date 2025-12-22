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
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-2">
          Posts tagged with #{tag}
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400">
          {filtered.length} {filtered.length === 1 ? 'post' : 'posts'}
        </p>
      </div>
      {filtered.length === 0 ? (
        <p className="text-neutral-500 dark:text-neutral-400">No posts found.</p>
      ) : (
        <BlogPosts tag={tag} />
      )}
    </section>
  );
}
