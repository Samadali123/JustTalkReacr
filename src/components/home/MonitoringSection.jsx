export default function MonitoringSection() {
  return (
    <section
      className="py-24 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/src/assets/images/footer-bg.jpg')" }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold">
          Easy Monitoring, Anytime, Anywhere
        </h2>
        <p className="text-xl mt-4">Your Call Center, On the Go</p>
        <p className="mt-2">
          Multi-Device Access | Built-In CRM | Call Recording
        </p>
        <div className="mt-8">
          <a
            href="/pricing"
            className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
}
