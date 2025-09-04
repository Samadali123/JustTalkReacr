export default function OmnichannelCommunicationSection() {
  const features = [
    {
      icon: "/src/assets/images/solution-10.png",
      title: "Chatbot & AI Integration",
      description: "Provide instant responses to customer inquiries, reducing wait times.",
    },
    {
      icon: "/src/assets/images/solution-11.png",
      title: "Social Media Integration",
      description: "Engage with customers on their favorite social platforms.",
    },
    {
      icon: "/src/assets/images/solution-12.png",
      title: "Email Management",
      description: "Handle all your customer emails from one place.",
    },
    {
      icon: "/src/assets/images/solution-13.png",
      title: "SMS Campaigns",
      description: "Reach your customers directly with SMS marketing.",
    },
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-text">
            Omnichannel Communication
          </h2>
          <p className="text-lg text-dark-text mt-4">
            Be Where Your Customers Are
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src={feature.icon} alt={feature.title} className="h-24 w-auto mx-auto mb-4" />
              <h3 className="text-xl font-bold text-dark-text">{feature.title}</h3>
              <p className="text-dark-text mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
