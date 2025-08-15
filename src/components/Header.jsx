
export default function Header() {
  return (
    <header className="w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        <p className="text-xl font-medium font-mono text-black">lkr</p>
        <nav className="space-x-6">
          <a
            href="#about"
            className="text-black font-medium text-xl font-mono hover:text-purple-400 hover:drop-shadow-[0_0_4px_rgba(192,132,252,0.8)] transition-colors duration-200"
          >
            about
          </a>
          <a
            href="/pdfs/resume-needsupdate.pdf"
            target = "_blank"
            className="text-black font-medium text-xl font-mono hover:text-purple-400 hover:drop-shadow-[0_0_4px_rgba(192,132,252,0.8)] transition-colors duration-200"
          >
            resume
          </a>
        </nav>
      </div>
    </header>
  );
}
