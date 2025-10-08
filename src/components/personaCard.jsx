import React from "react";

const PersonaCard = ({
  title,
  subtitle,
  avatarSrc,
  avatarAlt,
  description,
  bullets = [],
  priority,
  bgColor = "bg-blue-50", // default background
}) => (
  <div
    className={`flex flex-col ${bgColor} border border-neutral-300 rounded-lg p-4 gap-4 items-start`}
  >
    <div className="flex items-center gap-4">
      <img
        src={avatarSrc}
        alt={avatarAlt}
        className="w-12 h-12 rounded-full object-cover"
        loading="lazy"
      />
      <div className="flex flex-col">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <h4 className="text-gray-500">{subtitle}</h4>
      </div>
    </div>

    <ul className="list-disc list-inside text-stone-700 space-y-1">
      {bullets.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>

    <p className="text-sm font-semibold text-neutral-900">
      Priority: <span className="font-normal">{priority}</span>
    </p>
  </div>
);

export default PersonaCard;
