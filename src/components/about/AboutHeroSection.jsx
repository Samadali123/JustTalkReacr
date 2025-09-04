export default function AboutHeroSection() {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-dark-text">
              About Us - JustTawk
              <br />
              A Technotask Legacy
            </h1>
            <p className="text-lg text-dark-text mt-4">
              Just Tawk is a proud initiative by Technotask, a company known for revolutionizing the customer service industry.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-4">
                <img src="/src/assets/images/check.png" alt="check" className="h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-bold">Technotask Legacy</h3>
                  <p>With a legacy built on excellence and innovation, Technotask has consistently pushed the boundaries to ensure businesses can deliver world-class customer experiences effortlessly.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <img src="/src/assets/images/check.png" alt="check" className="h-6 w-6 mt-1" />
                <div>
                  <h3 className="font-bold">JustTawk Evolution</h3>
                  <p>With a legacy built on excellence and innovation, Technotask has consistently pushed the boundaries to ensure businesses can deliver world-class customer experiences effortlessly.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="/src/assets/images/img-03.png" alt="About Us" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
