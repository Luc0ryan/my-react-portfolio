
export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        <p className="text-2xl font-bold text-black">Lucas Ryan</p>

        <nav className="space-x-6">
          <a
            href="#about"
            className="text-black hover:text-blue-600 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#resume"
            className="text-black hover:text-blue-600 transition-colors duration-200"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
