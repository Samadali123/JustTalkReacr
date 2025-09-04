export default function CaseStudiesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-dark-text">
              Solve Your B2B Communication Challenges with Justtawk
            </h2>
            <p className="text-lg text-dark-text mt-4">
              Struggling with Customer Support?
            </p>
            <p className="text-dark-text mt-2">
              If you're a distributor finding it hard to keep up with customer
              queries, Justtawk simplifies your support process.
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <a
                href="/user-stories"
                className="text-primary font-bold hover:underline"
              >
                Read The Stories
              </a>
              <a
                href="/user-stories"
                className="text-primary font-bold hover:underline"
              >
                View all Stories
              </a>
            </div>
          </div>

          {/* Right side image */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="/src/assets/images/img-3.png"
              alt="Case Studies"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
