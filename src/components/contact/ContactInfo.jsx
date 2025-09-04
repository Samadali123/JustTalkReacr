export default function ContactInfo() {
  const contactDetails = [
    {
      icon: "/src/assets/images/img-05.png",
      title: "Send us an Email",
      info: "info@justtawk.com",
    },
    {
      icon: "/src/assets/images/img-10.png",
      title: "Office Location",
      info: "3rd Floor, Ganesh Galaxy City, Near Ayodhya Square, Ayodhya Bypass Road, Bhopal- 462041",
    },
    {
      icon: "/src/assets/images/img-09.png",
      title: "Call us Now",
      info: "+91 738 9863 549",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {contactDetails.map((detail, index) => (
            <div key={index} className="bg-light-gray p-8 rounded-lg shadow-md">
              <img src={detail.icon} alt={detail.title} className="h-24 w-auto mx-auto mb-4" />
              <h3 className="text-xl font-bold text-dark-text">{detail.title}</h3>
              <p className="text-dark-text mt-2">{detail.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
