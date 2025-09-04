import { useRegion } from "../context/RegionContext";
import indiaIndustries from "../data/industriesIndia.json";
import uaeIndustries from "../data/industriesUae.json";
import { Link } from "react-router-dom";

export default function Industries() {
  const { region } = useRegion();

  const industries = region === "india" ? indiaIndustries : [...indiaIndustries, ...uaeIndustries];

  return (
    <div className="w-max p-4">
      <h3 className="font-bold text-lg mb-4 text-dark-text">Industries</h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3 text-sm">
        {industries.map((ind) => (
          <li key={ind.slug} className="whitespace-nowrap">
            <Link
              to={`/industry/${ind.slug}`}
              className="text-dark-text hover:text-primary transition-colors"
            >
              {ind.slug}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}