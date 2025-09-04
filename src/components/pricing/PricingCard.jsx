export default function PricingCard({ plan }) {
  return (
    <div
      className={`p-8 rounded-lg shadow-lg text-center ${
        plan.mostPopular ? 'bg-primary text-white' : 'bg-white text-dark-text'
      }`}
    >
      {plan.mostPopular && (
        <span className="bg-white text-primary font-bold px-3 py-1 rounded-full text-sm -translate-y-12 inline-block">
          MOST POPULAR
        </span>
      )}
      <h3 className="text-2xl font-bold">{plan.planName}</h3>
      <p className="mt-4">
        <span className="text-4xl font-bold">{plan.price}</span>
        <span className="text-lg">{plan.period}</span>
      </p>
      <p className="mt-4">{plan.description}</p>
      <ul className="mt-8 space-y-4 text-left">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <a
          href={plan.buttonText === 'Contact Sales' ? '/contact-us' : 'https://app.justtawk.com/'}
          className={`font-bold py-3 px-8 rounded-lg transition duration-300 ${
            plan.mostPopular
              ? 'bg-white text-primary'
              : 'bg-primary text-white'
          }`}
        >
          {plan.buttonText}
        </a>
      </div>
    </div>
  );
}
