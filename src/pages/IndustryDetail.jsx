import { useParams } from "react-router-dom";
import { useRegion } from "../context/RegionContext";
import indiaIndustries from "../data/industriesIndia.json";
import uaeIndustries from "../data/industriesUae.json";
import IndustryDetailContent from "../components/industries/IndustryDetailContent";

export default function IndustryDetail() {
  const { slug } = useParams();
  const { region } = useRegion();

  const industries = region === "india" ? indiaIndustries : uaeIndustries;
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold">Industry not found</h1>
      </div>
    );
  }

  return <IndustryDetailContent industry={industry} />;
}



