export default function BlogSection() {
  const blogPosts = [
    {
      imgSrc: "/src/assets/images/blog-02.png",
      title: "Real Estate Agency Enhances Lead Conversion",
      description: "User: Priya, Sales Manager at a real estate firm Challenge: Missed client calls outside office hours, leading to lost potential buyers. Solution: Used JustTawk’s 24/7 AI-powered communication feature. Outcome: Captured and nurtured leads even after working hours, increasing conversion rates by 30%.",
    },
    {
      imgSrc: "/src/assets/images/blog-03.png",
      title: "Healthcare Provider Offers Round-the-Clock Assistance",
      description: "User: Dr. Ahmed, Owner of a telemedicine service Challenge: Patients needed urgent consultations, but support staff was unavailable at night. Solution: Integrated JustTawk’s unlimited contact handling and AI chatbot for scheduling and FAQs. Outcome: 24/7 patient assistance improved service reliability, reducing missed appointments by 40%.",
    },
    {
      imgSrc: "/src/assets/images/blog-04.png",
      title: "Travel Agency Monitors Agents in Real Time",
      description: "User: Anjali, Operations Head at a travel agency Challenge: Difficult to track remote customer support agents’ performance. Solution: Implemented JustTawk’s AI-powered call center. Solution: Leveraged JustTawk’s \"Easy Monitor on the Go\" feature. Outcome: Gained real-time insights, improved response efficiency by 50%, and enhanced customer experience.",
    },
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-text">
            Our Top Viewed Blogs
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.imgSrc} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-text">{post.title}</h3>
                <p className="text-dark-text mt-2 text-sm">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
