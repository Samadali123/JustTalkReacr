
import { useState } from "react";

const menu = [
  { id: "overview",  label: "Affordable at just ₹4,999/month" },
  { id: "zero",      label: "Zero commitments" },
  { id: "unlimited", label: "Unlimited communication handling" },
  { id: "monitoring",label: "Easy monitoring on the go" },
  { id: "24x7",      label: "Communicates 24*7" },
];

const content = {
  overview: (
    <div className="text-sm text-gray-600">
      {/* Intentionally left blank per requirement */}
    </div>
  ),
  zero: (
    <div className="text-sm text-gray-700 space-y-2">
      <h3 className="text-lg font-semibold">ZERO COMMITMENTS</h3>
      <p className="font-medium">We Work on Your Terms.</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Flexibility: Start and stop anytime. No long-term commitments.</li>
        <li>Tailored Plans: Customize services to fit your exact needs.</li>
        <li>Cost: No upfront surprises—just predictable, budget-friendly monthly payments.</li>
        <li>Control: Scale up or down as your business evolves.</li>
        <li>Risk-Free Trial: Try us for 30 days with no obligations. Cancel anytime if you’re not satisfied.</li>
      </ul>
    </div>
  ),
  unlimited: (
    <div className="text-sm text-gray-700 space-y-2">
      <h3 className="text-lg font-semibold">UNLIMITED COMMUNICATION HANDLING</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>More Than 100 Calls/Day</li>
        <li>Omnichannel Support</li>
      </ul>
      <p className="font-medium mt-2">Communicate where your customers are:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Inbound and Outbound Calls</li>
        <li>Email</li>
        <li>WhatsApp</li>
        <li>SMS</li>
        <li>IVR</li>
        <li>Chatbots</li>
        <li>Social Media</li>
        <li>Ticket Forms</li>
      </ul>
    </div>
  ),
  monitoring: (
    <div className="text-sm text-gray-700 space-y-2">
      <h3 className="text-lg font-semibold">EASY MONITORING ON THE GO</h3>
      <p>Manage everything remotely—your call center goes where you go.</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Multi-Device Access</li>
        <li>Built-In CRM</li>
        <li>Call Recording</li>
      </ul>
    </div>
  ),
  "24x7": (
    <div className="text-sm text-gray-700 space-y-2">
      <h3 className="text-lg font-semibold">COMMUNICATES 24*7</h3>
      <p>Always Available for Your Customers. Never miss a call, lead, or opportunity—day or night.</p>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Peak Demand? Covered!</strong> Handle busy periods without breaking a sweat.</li>
        <li><strong>Unexpected Surges? No Problem!</strong> Be ready for sudden spikes in traffic during promotions or events.</li>
        <li><strong>Beyond Office Hours? We’ve Got You!</strong> Ensure your customers are supported 24/7, even when your team isn’t around.</li>
      </ul>
    </div>
  ),
};

export default function Features({setOpenDropdown}) {

  const [active, setActive] = useState("zero");

  return (
    <div className="flex w-[720px] divide-x divide-gray-200">
      {/* Left menu */}
      <aside className="w-56 pr-4 py-4">
        <ul className="space-y-1">
          {menu.map((item) => (
            <li key={item.id}>
              <button
                onClick={ ()=>{
                    setActive(item.id);
                    if(item.id === "overview") setOpenDropdown(null);
                }}
                
                className={`w-full text-left px-3 py-2 rounded text-sm transition-colors
                  ${
                    active === item.id
                      ? "bg-red-50 text-red-600 font-semibold"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Right content */}
      <main className="flex-1 pl-6 py-4">{content[active]}</main>
    </div>
  );
}


