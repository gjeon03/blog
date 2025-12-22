import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1>JGY's Tech Blog</h1>
      <p>
        개발과 IT 기술을 탐구하는 블로그에 오신 것을 환영합니다!
        <br />
        직접 경험하며 배운 내용을 정리하고, 더 나은 해결 방법을 고민하는
        공간입니다.
      </p>
      <hr />
      <h2>Recent Posts</h2>
      <BlogPosts />
    </section>
  );
}
