import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-8">
        Blog
      </h1>
      <BlogPosts />
    </section>
  )
}
