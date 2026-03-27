import { useState } from "react";

export default function FadeImage({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  ...imgProps
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${!loaded ? "animate-pulse" : ""} ${wrapperClassName}`}>
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
         onError={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
        {...imgProps}
      />
    </div>
  );
}
