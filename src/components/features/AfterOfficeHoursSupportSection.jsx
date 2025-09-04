export default function AfterOfficeHoursSupportSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-dark-text">After-Office Hours Support</h2>
            <p className="text-xl text-dark-text mt-4">Never Miss a Customer Call</p>
            <p className="mt-4">
              Just Tawk is a proud initiative by Technotask, a company known for revolutionizing the customer service industry.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <span className="font-bold">The Problem:</span> Businesses often miss inquiries during non-working hours, leading to dissatisfied customers.
              </li>
              <li>
                <span className="font-bold">The Solution:</span> With Just Tawk, your communication channels stay active 24/7, so customers always receive timely assistance, even after office hours.
              </li>
            </ul>
            <p className="mt-4">
              <span className="font-bold">Use Case:</span> A healthcare provider managing patient inquiries round the clock ensures critical calls are never missed, saving lives and building trust.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/src/assets/images/features-img-01.png" alt="After-Office Hours Support" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
