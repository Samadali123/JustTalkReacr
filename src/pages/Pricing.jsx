import PricingCard from "../components/pricing/PricingCard";
import { pricingPlans } from "../data/pricingData";
import FAQSection from "../components/home/FAQSection";

export default function Pricing() {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-text">Justtawk Pricing Plans</h1>
          <p className="text-lg text-dark-text mt-4">
            Get the calling plan that's right for you
            <br />
            Choose the minutes, data, and features you need from the options below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
      <div className="mt-16">
        <FAQSection />
      </div>
    </section>
  );
}

