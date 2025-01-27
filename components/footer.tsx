import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex h-full items-center justify-center py-6">
      <nav>
        <ul className="flex flex-row gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
