export default function IndustryDetailContent({ industry }) {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* First Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-dark-text">{industry.firstSection.title}</h1>
        <p className="text-lg text-dark-text mt-4 max-w-3xl mx-auto">{industry.firstSection.shortDescription}</p>
      </section>

      {/* Second Section */}
      <section className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {industry.secondSection.map((section, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start gap-8">
              <img src={section.image} alt={section.title} className="w-full md:w-1/2 rounded-lg" />
              <div>
                <h2 className="text-2xl font-bold text-dark-text">{section.title}</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  {section.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Third Section (Case Study) */}
      <section className="mt-16 bg-light-gray p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/4">
            <img src={industry.thirdSection.image} alt="User" className="w-32 h-32 rounded-full mx-auto" />
          </div>
          <div className="md:w-3/4">
            <h2 className="text-2xl font-bold text-dark-text">{industry.thirdSection.title}</h2>
            <p className="text-lg italic mt-4">"{industry.thirdSection.description}"</p>
            <p className="text-right mt-4 font-bold">{industry.thirdSection.author}</p>
            <p className="text-right">{industry.thirdSection.authorTitle}</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      {industry.footer && (
        <section className="mt-16 text-center">
          <img src={industry.footer.logo} alt="Logo" className="h-12 w-auto mx-auto mb-4" />
          <p className="text-2xl font-bold text-dark-text">{industry.footer.text}</p>
          <a
            href="/contact-us"
            className="mt-8 inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300"
          >
            {industry.footer.buttonText}
          </a>
        </section>
      )}
    </div>
  );
}
