import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3">
          JGY's Tech Blog
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          개발과 IT 기술을 탐구하는 블로그에 오신 것을 환영합니다!
          <br />
          직접 경험하며 배운 내용을 정리하고, 더 나은 해결 방법을 고민하는
          공간입니다.
        </p>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
          Recent Posts
        </h2>
        <BlogPosts />
      </div>
    </section>
  );
}
