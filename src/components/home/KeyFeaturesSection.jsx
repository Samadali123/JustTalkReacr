import { useState } from 'react';

export default function KeyFeaturesSection() {
  const features = [
    {
      title: "Affordable at just ₹4,999/month",
      points: [
        "AI-powered call center solution",
        "Advanced analytics & reporting",
        "Custom branding & API access",
        "Priority support for seamless operations",
      ],
      imgSrc: "/src/assets/images/feat-img-01.png",
    },
    {
      title: "Unlimited Contact Handling – Scale Without Limits!",
      points: [
        "Handle unlimited customer interactions",
        "AI-powered efficiency & automation",
        "Seamless communication across channels",
        "Reliable & cost-effective solution",
      ],
      imgSrc: "/src/assets/images/feat-img-02.png",
    },
    {
      title: "Easy Monitoring On the Go – Stay in Control Anywhere!",
      points: [
        "Real-time call tracking & analytics",
        "Monitor performance from any device",
        "AI-driven insights for better decision-making",
        "Seamless remote supervision",
      ],
      imgSrc: "/src/assets/images/feat-img-03.png",
    },
    {
      title: "24/7 Communication – Always Connected, Anytime!",
      points: [
        "AI-powered support round the clock",
        "Never miss a customer query",
        "Seamless automation for instant responses",
        "Boost customer satisfaction effortlessly",
      ],
      imgSrc: "/src/assets/images/feat-img-04.png",
    },
  ];

  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const activeFeature = features[activeFeatureIndex];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-text">Our Key Features</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side buttons */}
          <div className="md:w-1/3 flex flex-col gap-4">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeatureIndex(index)}
                className={`p-4 rounded-lg text-left transition duration-300 ${
                  activeFeatureIndex === index
                    ? 'bg-primary text-white'
                    : 'bg-light-gray text-dark-text'
                }`}
              >
                <h3 className="font-bold">{feature.title}</h3>
              </button>
            ))}
          </div>

          {/* Right side content */}
          <div className="md:w-2/3 flex flex-col md:flex-row items-center bg-light-gray p-8 rounded-lg">
            <div className="md:w-1/2">
              <ul className="list-disc list-inside space-y-2">
                {activeFeature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src={activeFeature.imgSrc}
                alt={activeFeature.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
