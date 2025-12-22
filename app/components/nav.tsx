import Link from "next/link";
import { ThemeSwitcher } from "./theme-switcher";

const navItems = {
  "/": {
    name: "Home",
  },
  "/blog": {
    name: "Blog",
  },
  "/tags": {
    name: "Tags",
  },
};

export function Navbar() {
  return (
    <nav className="mb-8">
      <div className="flex flex-wrap items-center gap-4">
        {Object.entries(navItems).map(([path, { name }], index) => {
          return (
            <span key={path}>
              {index > 0 && <span className="mr-4">|</span>}
              <Link href={path}>
                {name}
              </Link>
            </span>
          );
        })}
        <span className="ml-auto">
          <ThemeSwitcher />
        </span>
      </div>
      <hr className="mt-4" />
    </nav>
  );
}
