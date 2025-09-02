
import { useState } from "react";
import { useRegion } from "../context/RegionContext";
import indiaFlag from "../assets/images/india-flag.png";
import uaeFlag from "../assets/images/uae-flag.png";

const regions = [
  { code: "india", label: "India", flag: indiaFlag },
  { code: "uae", label: "UAE", flag: uaeFlag },
];

export default function RegionSelect() {
  const { region, setRegion } = useRegion();
  const [open, setOpen] = useState(false);
  const current = regions.find((r) => r.code === region);

  return (
    <div
      className="relative"
      onMouseLeave={() => setOpen(false)}
    >
      {/* Button */}
      <button
        className="flex items-center gap-2 px-3 py-2 shadow-amber-50 rounded-md"
        onMouseEnter={() => setOpen(true)}
      >
        <span>Region</span>
        <img src={current.flag} alt={current.label} className="w-3 h-3" />
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Drop-down – same width as button */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white rounded-b-md shadow z-20">
          {regions.map((r) => (
            <button
              key={r.code}
              onClick={() => {
                setRegion(r.code);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 w-full hover:bg-blue-50"
            >
              <img src={r.flag} alt={r.label} className="w-3 h-3" />
              <span className="text-sm">{r.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}