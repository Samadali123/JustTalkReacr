export default function StepsSection() {
  const steps = [
    {
      imgSrc: "/src/assets/images/Step-1.png",
      title: "Step-1",
      description: "Click on Book a Free Demo",
    },
    {
      imgSrc: "/src/assets/images/Step-2.png",
      title: "Step-2",
      description: "Create an account with your Email & Phone Number",
    },
    {
      imgSrc: "/src/assets/images/Step-3.png",
      title: "Step-3",
      description: "Select your Country & choose a Customer Care number for your business",
    },
    {
      imgSrc: "/src/assets/images/Step-4.png",
      title: "Step-4",
      description: "Enter FAQ's (Frequently Asked Questions) about your business",
    },
    {
      imgSrc: "/src/assets/images/Step-5.png",
      title: "Step-5",
      description: "Your 24/7 Call Center is Live now",
    },
    {
      imgSrc: "/src/assets/images/Step-6.png",
      title: "Step-6",
      description: "Start Your Justtawk Amazing Journey and Check",
    },
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-text">
            6 Steps to Exceptional Customer Experiences:
          </h2>
          <p className="text-lg text-dark-text mt-4">
            Exceptional customer experiences are within reach.
            <br />
            Here are 6 steps to make it happen.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src={step.imgSrc} alt={step.title} className="h-32 w-auto mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary">{step.title}</h3>
              <p className="text-dark-text mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
