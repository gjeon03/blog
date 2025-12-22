function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          © {new Date().getFullYear()} MIT Licensed
        </p>
        <div className="flex gap-6">
          <a
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            RSS
          </a>
          <a
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/gjeon03"
          >
            GitHub
          </a>
          <a
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/gjeon03/blog"
          >
            Source
          </a>
        </div>
      </div>
    </footer>
  );
}
