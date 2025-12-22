export default function Footer() {
  return (
    <footer className="mt-12 pt-4">
      <hr />
      <div className="mt-4 text-sm">
        <p>
          <b>Links:</b>{" "}
          <a href="/rss" target="_blank" rel="noopener noreferrer">
            RSS
          </a>
          {" | "}
          <a
            href="https://github.com/gjeon03"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {" | "}
          <a
            href="https://github.com/gjeon03/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source
          </a>
        </p>
        <p className="mt-2">
          <small>© {new Date().getFullYear()} MIT Licensed</small>
        </p>
      </div>
    </footer>
  );
}
