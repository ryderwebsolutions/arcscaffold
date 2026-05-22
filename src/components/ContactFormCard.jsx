import { useState } from "react";

const serviceOptions = [
  "Residential Scaffolding",
  "Commercial Scaffolding",
  "Access Scaffolding",
  "Other",
];

export default function ContactFormCard() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-card">
        <h3 className="text-2xl font-black text-navy mb-2">Thank You</h3>
        <p className="text-arc-steel text-sm">
          Your enquiry has been received. ARC will be in touch shortly to review your project requirements.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-xl p-7 sm:p-8 shadow-card space-y-4" noValidate>
      <h3 className="text-2xl font-black text-navy mb-1">Request A Scaffolding Quote</h3>
      <p className="text-sm text-arc-steel mb-4">Share your project details and preferred timeframe.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        <label className="text-xs font-bold uppercase tracking-[0.12em] text-navy">
          Full Name
          <input
            name="name"
            required
            value={formData.name}
            onChange={onChange}
            className="mt-1.5 w-full border border-gray-200 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-arc-orange"
          />
        </label>
        <label className="text-xs font-bold uppercase tracking-[0.12em] text-navy">
          Phone
          <input
            name="phone"
            required
            value={formData.phone}
            onChange={onChange}
            className="mt-1.5 w-full border border-gray-200 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-arc-orange"
          />
        </label>
      </div>

      <label className="text-xs font-bold uppercase tracking-[0.12em] text-navy block">
        Email
        <input
          name="email"
          required
          type="email"
          value={formData.email}
          onChange={onChange}
          className="mt-1.5 w-full border border-gray-200 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-arc-orange"
        />
      </label>

      <label className="text-xs font-bold uppercase tracking-[0.12em] text-navy block">
        Service
        <select
          name="projectType"
          value={formData.projectType}
          onChange={onChange}
          className="mt-1.5 w-full border border-gray-200 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-arc-orange"
        >
          <option value="">Select service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="text-xs font-bold uppercase tracking-[0.12em] text-navy block">
        Project Details
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={onChange}
          className="mt-1.5 w-full border border-gray-200 rounded px-3.5 py-2.5 text-sm focus:outline-none focus:border-arc-orange resize-none"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-arc-orange hover:bg-arc-orange-dark text-white font-bold py-3 rounded shadow-orange transition-colors"
      >
        Send Quote Request
      </button>
    </form>
  );
}
