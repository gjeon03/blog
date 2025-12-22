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
      <h1>All Tags</h1>
      <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginTop: '1em' }}>
        {sortedTags.map(([tag, count]) => (
          <li key={tag} style={{ marginBottom: '0.5em' }}>
            <Link href={`/tags/${tag}`}>
              #{tag}
            </Link>
            {" "}
            <small style={{ color: '#666' }}>({count} post{count !== 1 ? 's' : ''})</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
