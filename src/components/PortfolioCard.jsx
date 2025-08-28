export default function PortfolioSection({
  description,  // subtitle
  color,        // background/text color class
  image,
  imageAlt,
  title,        // main title
}) {
  return (
    <div
      className={`max-w-2xl flex flex-col gap-2 items-left 
                  py-4 px-4 rounded-lg border border-neutral-300 
                  transition-transform duration-300 
                  hover:-translate-y-0.5 hover:shadow-sm ${color}`}
    >
      {/* Top Image */}
      <div className="w-full flex justify-center">
        <img
          src={image}
          alt={imageAlt}
          className="w-full max-w-xl h-auto rounded-md"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-crimson font-bold antialiased text-left">
        {title}
      </h3>

      {/* Sub-title / Description */}
      <p className="text-sm md:text-lg text-left leading-snug">
        {description}
      </p>
    </div>
  );
}
