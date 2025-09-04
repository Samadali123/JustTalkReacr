export default function ContactHeroSection() {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-dark-text">
              JustTawk: Connecting you to the right answers, fast.
            </h1>
            <p className="text-lg text-dark-text mt-4">
              Have questions or need assistance? We’re here to help! Reach out to us for customer support, partnership opportunities, or any enquiries about our services. Our team is available 24/7 to ensure you get the best experience with Just Tawk.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/src/assets/images/img-04.png" alt="Contact Us" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
