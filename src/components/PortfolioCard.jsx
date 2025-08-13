import Button from "./Button";

export default function PortfolioSection({ logo, logoAlt, description, link, image, imageAlt }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center py-16">
      
      {/* Left Column */}
      <div className="order-2 md:order-1 flex flex-col space-y-8 px-6 sm:px-10 md:px-0">
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

        {/* Read More (Button as Link) */}
        <Button
          text="Read More"
          link={link}
          onHoverColor="bg-blue-700"
        />
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
