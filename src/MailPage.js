import React from "react";
import Navbar from "./Navbar"; // Ensure Navbar.js is in the same folder or adjust path accordingly

const domains = [
  { name: "Artificial Intelligence & Data Science", icon: "🤖" },
  { name: "SaaS/Cloud Native Solutions", icon: "☁️" },
  { name: "IoT & Smart Devices", icon: "📡" },
  { name: "Cybersecurity & Privacy", icon: "🔐" },
  { name: "ESG & Smart Cities", icon: "🌆" },
  { name: "HealthTech", icon: "🏥" },
  { name: "HealthTech & Life Sciences", icon: "🧬" },
];

const MailPage = () => {
  return (
    <div className="bg-[#0d1b2a] text-white min-h-screen font-sans">
      {/* ✅ Responsive Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Igniting Ideas. Fueling Growth. Scaling Impact.
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
          Empowering entrepreneurs to transform bold, scalable global solutions through scoping, agile technology, know-how and strategic support.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium">Explore Programs</button>
          <button className="border border-white px-6 py-2 rounded-full font-medium">Our Network Vision</button>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-medium">Get Involved</button>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="bg-white text-black py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">About AIIC</h3>
            <p>Empowering Global Innovation</p>
            <p>AEITY Innovation & Incubation Centre (AIIC) nurtures disruptive startups with world-class mentorship, funding access, and deep-tech resources to accelerate global impact.</p>
            <a href="#" className="text-blue-600 font-medium block mt-2">Learn More →</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Flagship Program: AEITHON</h3>
            <p>From Idea to Impact</p>
            <p>AEITHON is AIIC’s premier hybrid incubation program transforming early-stage ideas into investment-ready ventures through prototyping labs, expert guidance, and international exposure.</p>
            <a href="#" className="text-blue-600 font-medium block mt-2">Learn More →</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Startup Support</h3>
            <p>Build. Launch. Scale.</p>
            <p>From legal advisory to AI mentorship, AIIC offers tailored support for startups to grow with confidence—connecting them to investors, markets, and global opportunities.</p>
            <a href="#" className="text-blue-600 font-medium block mt-2">Get Started →</a>
          </div>
        </div>
      </section>

      {/* ✅ Innovation Domains */}
      <section className="bg-gray-50 text-black py-16 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Innovation Domains</h2>
          <p className="mt-2 text-gray-600">Focus is across 9 areas: Frontier areas. Infrastructure. Focus areas.</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="bg-[#0d1b2a] p-6 rounded-xl shadow hover:shadow-md transition flex flex-col items-center"
            >
              <div className="text-3xl mb-2">{domain.icon}</div>
              <p className="text-sm font-medium text-white">{domain.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Footer - Split into Two Parts */}
      {/* Footer Top Section */}
      <div className="bg-white text-[#0d1b2a] px-6 pt-12 pb-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-[#1e3a8a]">
              <li><a href="#" className="hover:underline">About AIIC</a></li>
              <li><a href="#" className="hover:underline">AEITHON Program</a></li>
              <li><a href="#" className="hover:underline">Startup Support</a></li>
              <li><a href="#" className="hover:underline">Innovation Domains</a></li>
              <li><a href="#" className="hover:underline">Events & Blog</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3"> Get Involved</h4>
            <ul className="space-y-2 text-[#1e3a8a]">
              <li><a href="#" className="hover:underline">Become a Mentor</a></li>
              <li><a href="#" className="hover:underline">Apply as a Startup</a></li>
              <li><a href="#" className="hover:underline">Join as Corporate Partner</a></li>
              <li><a href="#" className="hover:underline">Collaborate as Academic/Research</a></li>
              <li><a href="#" className="hover:underline">Become a Strategic Investor</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-[#1e3a8a]">
              <li><a href="#" className="hover:underline">News & Press</a></li>
              <li><a href="#" className="hover:underline">Upcoming Events</a></li>
              <li><a href="#" className="hover:underline">Blog Insights</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Program Brochures (PDF)</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3"> Legal</h4>
            <ul className="space-y-2 text-[#1e3a8a]">
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Code of Conduct</a></li>
              <li><a href="#" className="hover:underline">Disclaimer</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
<div className="bg-[#0d1b2a] text-gray-400 text-xs px-6 py-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 text-left">
    
    {/* Column 1: Contact Info */}
    <div>
      <h4 className="text-white font-semibold mb-1">Contact Info</h4>
      <p>
        AEITY Innovation & Incubation Centre (AIIC)<br />
        Flagship: AEITHON<br />
        Bangalore HQ | Global Hubs<br />
        Email: <a href="mailto:aiic@aeitys.com" className="text-blue-400 hover:underline">aiic@aeitys.com</a><br />
        Contact: <a href="tel:+919964556019" className="hover:underline">+91-9964556019</a>
      </p>
    </div>

    {/* Column 2: Copyright */}
    <div>
      <p>
        © 2025: <span className="text-white font-semibold">AEITHON</span> | AEITHY Innovation & Incubation Centre.<br />
        Hosted by AEITY Systems Pvt Ltd. All rights reserved.
      </p>
    </div>

    {/* Column 3: Tagline */}
    <div>
      <p>
        <span className="text-white font-medium">Igniting Innovation. Accelerating Growth.</span><br />
        Scaling Impact. – <span className="italic">Quality</span>
      </p>
    </div>
    
  </div>
</div>

    </div>
  );
};

export default MailPage;
