import { Link } from "react-router-dom"; // if using react-router, otherwise use <a href="/">

export default function Header() {
  return (
    <header className="w-full border-b border-neutral-300">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center px-6 md:px-12 py-4">
        <Link
          to="/"
          className="text-xl font-medium font-mono text-black hover:text-indigo-600 transition-colors"
        >
          lkr
        </Link>
      </div>
    </header>
  );
}
