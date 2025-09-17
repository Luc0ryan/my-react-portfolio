export default function PortfolioSection({
  description,  // subtitle
  color,        // background/text color class (applies only to image block)
  image,
  imageAlt,
  title,        // main title
}) {
  return (
    <div className="max-w-2xl flex flex-col gap-2">
      {/* Image Block (with border, color, hover) */}
<div
  className={`overflow-hidden rounded-lg border border-neutral-300 
              transition-transform duration-300 
              hover:-translate-y-0.5 hover:shadow-sm ${color}`}
>
  <img
    src={image}
    alt={imageAlt}
    className="w-full max-w-xl max-h-100 object-cover mx-auto"
  />
</div>


      {/* Text Block (no border/color) */}
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
