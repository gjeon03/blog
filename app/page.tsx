import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        Welcome to My Portfolio I'm a Frontend Developer passionate about
        crafting clean and responsive user interfaces using Next.js. I thrive on
        building dynamic and performant web applications, focusing on seamless
        user experiences and maintainable codebases.
        <br />
        <br />
        From exploring modern JavaScript frameworks to optimizing for SEO and
        accessibility, I enjoy every step of building web applications. Dark
        mode, static typing, and beautiful design patterns are my trusted tools
        for a productive development journey.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
