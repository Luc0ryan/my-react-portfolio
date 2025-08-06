export default function PortfolioSection({ logo, description, link, image }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center py-16 px-6 md:px-12 bg-white">
      {/* Left Column */}
      <div className="flex flex-col  space-y-6">
        {/* Logo */}
        <img 
          src={logo} 
          alt="Organization Logo" 
          className="w-1/2 h-auto"
        />
        
        {/* Description */}
        <p className="text-[32px] font-bold leading-tight text-gray-900">
          {description}
        </p>

        {/* Read More Link */}
        <a 
          href={link} 
          className="inline-flex items-center font-semibold text-black hover:text-blue-800 transition-colors"
        >
          Read More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-5 h-5 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Right Column (Image) */}
      <div className="flex justify-center">
        <img 
          src={image} 
          alt="Case Study Preview" 
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}