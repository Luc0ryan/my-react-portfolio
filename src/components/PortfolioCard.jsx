export default function PortfolioSection({ logo, logoAlt, description, link, image, imageAlt }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center py-20 md:py-28">
      
      {/* Left Column */}
      <div className="flex flex-col space-y-8 px-6 sm:px-10 md:px-0">
        {/* Logo */}
        <img 
          src={logo} 
          alt={logoAlt}
          className="w-2/3 max-w-xs h-auto"
        />

        {/* Description */}
        <p className="text-[28px] sm:text-[32px] font-bold leading-snug text-gray-900">
          {description}
        </p>

        {/* Read More Link */}
        <a 
          href={link} 
          className="inline-flex items-center font-medium text-black hover:text-blue-700 transition-colors"
        >
          Read More
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-5 h-5 ml-2" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Right Column (Image) */}
      <div className="flex justify-center px-6 sm:px-10 md:px-0">
        <img 
          src={image} 
          alt={imageAlt}
          className="w-full max-w-xl h-auto"
        />
      </div>
    </section>
  );
}
