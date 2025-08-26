export default function PortfolioSection({
  logo,
  logoAlt,
  description,
  color,      // ← background/text color class
  link,
  image,
  imageAlt,
}) {
  return (
    <section
      className={`max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 
                  items-center py-6 px-8 border-1 border-stone-700 rounded-lg ${color}`}
    >
      {/* Left Column */}
      <div className="order-2 md:order-1 flex flex-col space-y-4 px-6 sm:px-10 md:px-0">
        {/* Logo */}
        <img
          src={logo}
          alt={logoAlt}
          className="w-1/2 max-w-xs h-auto"
        />

        {/* Description */}
        <p className="text-xl font-semibold antialiased leading-snug">
          {description}
        </p>
      </div>

      {/* Right Column (Image) */}
      <div className="order-1 md:order-2 flex justify-center px-6 sm:px-10 md:px-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full max-w-xl h-auto"
        />
      </div>
    </section>
  );
}
