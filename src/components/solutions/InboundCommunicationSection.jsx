export default function InboundCommunicationSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src="/src/assets/images/img-04.png" alt="Inbound Communication" className="w-full h-auto rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-dark-text">
              Inbound Communication So Easy, It's JustTawk
            </h2>
            <p className="text-lg text-dark-text mt-4">
              Never Miss a Customer Again – Stay Connected 24/7 with JustTawk!
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <img src="/src/assets/images/solution-01.png" alt="24/7 Availability" className="h-12 w-12" />
                <div>
                  <h3 className="font-bold">24/7 Availability</h3>
                  <p>Keep communication channels open round the clock.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img src="/src/assets/images/solution-02.png" alt="Trained Agents" className="h-12 w-12" />
                <div>
                  <h3 className="font-bold">Trained Agents</h3>
                  <p>Skip training costs; agents are ready to handle calls immediately.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img src="/src/assets/images/solution-03.png" alt="Multilingual Support" className="h-12 w-12" />
                <div>
                  <h3 className="font-bold">Multilingual Support</h3>
                  <p>Support in 7 Indian languages, included in every plan.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img src="/src/assets/images/solution-04.png" alt="Instant Setup" className="h-12 w-12" />
                <div>
                  <h3 className="font-bold">Instant Setup</h3>
                  <p>Go live in just 5 minutes—no delays, no downtime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
