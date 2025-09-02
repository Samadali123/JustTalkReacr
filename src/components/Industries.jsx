import { useRegion } from "../context/RegionContext";
import indiaIndustries from "../data/industriesIndia.json";
import uaeIndustries   from "../data/industriesUae.json";
import { Link } from "react-router-dom";

export default function Industries() {
  const { region } = useRegion();

  const list =
    region === "india"
      ? indiaIndustries
      : [...indiaIndustries, ...uaeIndustries];

  const gridClass =
    region === "uae"
      ? "grid grid-flow-col grid-rows-[repeat(6,auto)] gap-x-8 gap-y-3"
      : "grid grid-cols-1 gap-y-3";

  return (
    <div className="w-max px-8 py-6">
      <ul className={`${gridClass} text-sm text-gray-800`}>
        {list.map((ind) => (
          <li key={ind.slug} className="whitespace-nowrap px-3 py-2">
            <Link
              to={`/industry/${ind.slug}`}
              className="hover:text-red-400"
            >
              {ind.slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}