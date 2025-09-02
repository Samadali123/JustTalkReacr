import { useParams } from "react-router-dom";
import { useRegion } from "../context/RegionContext";
import indiaIndustries from "../data/industriesIndia.json";
import uaeIndustries from "../data/industriesUae.json";

export default function IndustryDetail() {
  const { slug } = useParams();
  const { region } = useRegion();


  const data = region === "india" ? indiaIndustries : [...indiaIndustries, ...uaeIndustries];
  const industry = data.find((item) => item.slug === slug);

  if (!industry) {
    return <h2 className="p-6">Industry not found</h2>;
  }

 return (
    <div>
       <h3>Industry : {slug}</h3>
    </div>
  );
}



