import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

interface Props {
  tag?: string;
}

export function BlogPosts({ tag }: Props) {
  let allBlogs = getBlogPosts();

  if (tag) {
    allBlogs = allBlogs.filter((post) => post.metadata.tags?.includes(tag));
  }

  return (
    <div className="space-y-6">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="block group"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-neutral-900 dark:text-neutral-100 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {post.metadata.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
