export default function OurStorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-dark-text">Our Story</h2>
        <p className="max-w-3xl mx-auto text-lg text-dark-text mt-4">
          Just Tawk was founded with a simple yet powerful vision: To simplify customer service for businesses of all sizes.
        </p>
        <p className="max-w-3xl mx-auto text-lg text-dark-text mt-4">
          We believe that great communication shouldn’t be a luxury— it should be accessible, affordable, and easy to manage.
        </p>
        <p className="max-w-3xl mx-auto text-lg text-dark-text mt-4">
          By integrating advanced call management, omnichannel communication, and AI-powered tools, we empower businesses to stay connected with their customers anytime, anywhere—without the complexities of hiring, training, and managing in-house staff.
        </p>
        <div className="flex justify-center gap-8 mt-8">
            <img src="/src/assets/images/img-abt-01.png" alt="Our Story Image 1" className="w-1/2 md:w-1/3 rounded-lg" />
            <img src="/src/assets/images/img-abt-02.png" alt="Our Story Image 2" className="w-1/2 md:w-1/3 rounded-lg" />
        </div>
      </div>
    </section>
  );
}
