export default function OmnichannelSupportSection() {
  const channels = [
    {
      icon: "/src/assets/images/phone.svg",
      title: "Inbound Calls",
      description: "Handle customer interactions efficiently through dedicated phone support.",
    },
    {
      icon: "/src/assets/images/email.svg",
      title: "Email",
      description: "Manage customer queries and feedback seamlessly via email communication.",
    },
    {
      icon: "/src/assets/images/whatsapp.svg",
      title: "WhatsApp",
      description: "Provide instant support and updates through WhatsApp messaging.",
    },
    {
      icon: "/src/assets/images/sms.svg",
      title: "SMS",
      description: "Stay connected with concise and timely SMS notifications.",
    },
    {
      icon: "/src/assets/images/obd.svg",
      title: "IVR (Interactive Voice Response)",
      description: "Automate customer interactions with intelligent voice response systems.",
    },
    {
      icon: "/src/assets/images/chatbot.svg",
      title: "Chatbots",
      description: "Deliver instant assistance and solutions through AI-powered chatbots.",
    },
    {
      icon: "/src/assets/images/social.svg",
      title: "Social Media",
      description: "Engage customers directly on their preferred social platforms.",
    },
    {
      icon: "/src/assets/images/ticket.svg",
      title: "Ticket Forms",
      description: "Streamline issue tracking and resolution with structured ticket forms.",
    },
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-text">Omnichannel Support</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/3">
            <img
              src="/src/assets/images/img-2.png"
              alt="Omnichannel Support"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {channels.map((channel, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4">
                <img src={channel.icon} alt={channel.title} className="h-8 w-8 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-dark-text">{channel.title}</h3>
                  <p className="text-dark-text mt-2">{channel.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
