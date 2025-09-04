import HeroSection from "../components/home/HeroSection";
import KeyHighlightsSection from "../components/home/KeyHighlightsSection";
import StepsSection from "../components/home/StepsSection";
import KeyFeaturesSection from "../components/home/KeyFeaturesSection";
import OmnichannelSupportSection from "../components/home/OmnichannelSupportSection";
import MonitoringSection from "../components/home/MonitoringSection";
import CaseStudiesSection from "../components/home/CaseStudiesSection";
import WhoCanBenefitSection from "../components/home/WhoCanBenefitSection";
import FAQSection from "../components/home/FAQSection";
import BlogSection from "../components/home/BlogSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <KeyHighlightsSection />
      <StepsSection />
      <KeyFeaturesSection />
      <OmnichannelSupportSection />
      <MonitoringSection />
      <CaseStudiesSection />
      <WhoCanBenefitSection />
      <FAQSection />
      <BlogSection />
    </div>
  );
}