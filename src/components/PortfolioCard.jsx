export default function PortfolioSection({
  description,
  color,
  image,
  imageAlt,
  title,
}) {
  return (
    <div className="flex flex-col gap-2 max-w-4xl">
      {/* Image Block with natural aspect ratio */}
      <div
        className={`overflow-hidden rounded-lg border border-neutral-300
                    transition-transform duration-300
                    hover:-translate-y-0.5 hover:shadow-sm ${color}`}
      >
        <div className="aspect-[4/3] w-full">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Text Block */}
      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-lg md:text-xl font-crimson font-bold antialiased text-left">
          {title}
        </h3>
        <p className="text-sm md:text-md text-left leading-snug text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  );
}
