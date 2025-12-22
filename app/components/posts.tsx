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
    <ul style={{ listStyleType: 'disc', marginLeft: '20px', marginTop: '1em' }}>
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
          <li key={post.slug} style={{ marginBottom: '0.5em' }}>
            <Link href={`/blog/${post.slug}`}>
              {post.metadata.title}
            </Link>
            {" "}
            <small style={{ color: '#666' }}>
              ({formatDate(post.metadata.publishedAt, false)})
            </small>
          </li>
        ))}
    </ul>
  );
}
