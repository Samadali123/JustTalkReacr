export default function HeroSection() {
  const communicationChannels = [
    { name: 'Inbound Call', icon: '/src/assets/images/phone.svg' },
    { name: 'Outbound Call', icon: '/src/assets/images/phone.svg' },
    { name: 'Email', icon: '/src/assets/images/email.svg' },
    { name: 'SMS', icon: '/src/assets/images/sms.svg' },
    { name: 'WhatsApp', icon: '/src/assets/images/whatsapp.svg' },
    { name: 'IVR', icon: '/src/assets/images/obd.svg' },
    { name: 'ChatBot', icon: '/src/assets/images/chatbot.svg' },
    { name: 'Social Media', icon: '/src/assets/images/social.svg' },
    { name: 'Ticket Forms', icon: '/src/assets/images/ticket.svg' },
  ];

  return (
    <section className="bg-light-gray">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-dark-text leading-tight">
              India's First Subscription-Based Customer Communication Platform at 4,999
            </h1>
            <p className="mt-4 text-lg text-dark-text">
              Communicate on Your Terms. | No Contracts. | No Overspending
            </p>
            <div className="mt-8">
              <a
                href="http://app.justtawk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300 inline-block"
              >
                Get your 30-day free demo
              </a>
              <p className="mt-2 text-sm text-gray-500">
                Cancel anytime during trial.
              </p>
            </div>
          </div>

          {/* Right side image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/src/assets/images/mobile-dekstop-img-1.png"
              alt="JustTawk Platform"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Communication channels */}
        <div className="mt-12">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {communicationChannels.map((channel) => (
                    <div key={channel.name} className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-md">
                        <img src={channel.icon} alt={channel.name} className="w-6 h-6" />
                        <span className="font-medium text-dark-text">{channel.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
