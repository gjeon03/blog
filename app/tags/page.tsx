import { getBlogPosts } from "app/blog/utils";
import Link from "next/link";

export default async function TagsPage() {
  const posts = await getBlogPosts();

  const tagMap: Record<string, number> = {};

  posts.forEach((post) => {
    post.metadata.tags?.forEach((tag) => {
      const trimmed = tag.trim().toLowerCase();

      tagMap[trimmed] = (tagMap[trimmed] || 0) + 1;
    });
  });

  const sortedTags = Object.entries(tagMap).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-8">
        All Tags
      </h1>
      <div className="flex flex-wrap gap-3">
        {sortedTags.map(([tag, count]) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200"
          >
            <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              #{tag}
            </span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              {count}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
