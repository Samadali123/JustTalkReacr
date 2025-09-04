import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Thank you for your message. We will get back to you shortly.');
  };

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-dark-text">Contact Form</h2>
          <p className="text-lg text-dark-text mt-4">
            Fill out the form below, and we’ll get back to you as soon as possible.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8">
          <div className="grid grid-cols-1 gap-6">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="p-3 rounded-lg border"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="p-3 rounded-lg border"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Contact Number"
              className="p-3 rounded-lg border"
              required
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="p-3 rounded-lg border"
              required
            />
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="p-3 rounded-lg border"
              required
            >
              <option value="">Select Reason</option>
              <option value="sales">Sales Inquiry</option>
              <option value="support">Customer Support</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
            <button
              type="submit"
              className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
