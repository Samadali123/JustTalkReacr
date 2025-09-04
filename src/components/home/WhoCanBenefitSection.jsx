export default function WhoCanBenefitSection() {
  const beneficiaries = [
    {
      title: "Startups & Small Businesses",
      problem: "Limited staff and bandwidth to handle customer queries",
      benefit: "Automate support, handle unlimited contacts, and provide 24/7 service — all at an affordable price",
    },
    {
      title: "Healthcare Providers & Clinics",
      problem: "Patients need assistance outside clinic hours",
      benefit: "Automate appointment scheduling and FAQs, ensuring support is available 24/7",
    },
    {
      title: "Real Estate Agencies",
      problem: "Lost leads due to missed calls and delayed follow-ups",
      benefit: "Capture and engage leads in real-time, even after hours",
    },
    {
      title: "Travel & Hospitality Businesses",
      problem: "Inquiries during off-hours and language barriers",
      benefit: "24/7 AI-driven multilingual support, booking assistance, and customer engagement",
    },
    {
      title: "Freelancers, Consultants & Coaches",
      problem: "Constant back-and-forth with clients disrupting focus",
      benefit: "Automate FAQs, appointment booking, and lead handling to free up your time",
    },
    {
      title: "SaaS & Tech Companies",
      problem: "High volume of support tickets and repetitive queries",
      benefit: "Use AI to resolve common issues instantly, guide users, and reduce support team load",
    },
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-text">
            Who Can Benefit from Justtawk
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficiaries.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-dark-text mb-4">{item.title}</h3>
              <p className="text-dark-text">
                <span className="font-bold">Problem:</span> {item.problem}
              </p>
              <p className="text-dark-text mt-2">
                <span className="font-bold">Benefit:</span> {item.benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
