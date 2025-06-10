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
    <div>
      <h1 className="text-2xl font-bold mb-4">All Tags</h1>
      <ul className="space-y-2">
        {sortedTags.map(([tag, count]) => (
          <li key={tag}>
            <Link href={`/tags/${tag}`}>
              <span className="text-blue-600 hover:underline">
                #{tag} ({count})
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
