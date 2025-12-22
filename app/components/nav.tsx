import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/tags": {
    name: "tags",
  },
};

export function Navbar() {
  return (
    <nav className="mb-12 pb-6 border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-6">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200 text-sm font-medium"
              >
                {name}
              </Link>
            );
          })}
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
