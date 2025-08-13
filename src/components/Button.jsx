export default function Button({ text, onHoverColor, link }) {
    return (
      <a
        href={link}
        className={`group px-3 py-3 border-2 border-gray-900 bg-white text-gray-900 inline-flex items-center max-w-fit font-semibold rounded-lg hover:${onHoverColor} hover:text-white hover:border-neutral-200 transition-colors duration-200`}
      >
        <span>{text}</span>
  
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 transition-transform duration-200 transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    );
  }
  