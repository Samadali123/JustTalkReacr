export default function KeyHighlightsSection() {
  const highlights = [
    {
      icon: "/src/assets/images/counter-01.svg",
      value: "1500+",
      label: "Tickets Solved",
    },
    {
      icon: "/src/assets/images/counter-02.svg",
      value: "112+",
      label: "Happy Customers",
    },
    {
      icon: "/src/assets/images/counter-03.svg",
      value: "35+",
      label: "Industries Served",
    },
    {
      icon: "/src/assets/images/counter-04.svg",
      value: "27%",
      label: "LOBs Covered",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex flex-col items-center p-4 w-full sm:w-1/2 md:w-1/4">
              <img src={highlight.icon} alt="" className="h-16 w-16 mb-4" />
              <p className="text-4xl font-bold text-primary">{highlight.value}</p>
              <p className="text-lg text-dark-text mt-2">{highlight.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
